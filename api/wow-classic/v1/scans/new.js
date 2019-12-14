const Endpoint = require('cubic-api/endpoint')
const request = require('request-promise')
const fs = require('fs')
const tsmKey = process.env.TSM_API_KEY || fs.readFileSync('/run/secrets/tsm-api-key', 'utf-8').trim()

class Scan extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Stores a new TSM scan in the database.'
    this.schema.method = 'POST'
    this.schema.scope = 'write_scans_wow-classic'
    this.schema.url = '/wow-classic/v1/scans/new'
    this.schema.request = {
      body: {
        slug: 'anathema-alliance',
        region: 'EU',
        scanId: '1571761307',
        scannedAt: new Date(1571761307 * 1000)
      }
    }
    this.schema.response = String
  }

  async main (req, res) {
    const slug = req.body.slug
    const region = req.body.region.toLowerCase()
    const scanId = req.body.scanId
    const scannedAt = new Date(req.body.scannedAt)
    const scannedAtHour = new Date(scannedAt.getTime())
    scannedAtHour.setMinutes(0)
    scannedAtHour.setSeconds(0)
    scannedAtHour.setMilliseconds(0)
    const scannedAtDay = new Date(scannedAtHour.getTime())
    scannedAtDay.setHours(0)

    const scanExistsAlready = await this.db.collection('scans').findOne({ slug, scanId })
    if (scanExistsAlready) {
      return res.send('Rejected. Scan already exists.')
    }

    console.log('tsm scan')
    const scan = await request({
      uri: `http://api2.tradeskillmaster.com/realm/${slug}/scan/${scanId}`,
      json: true,
      headers: { 'User-Agent': 'Request-Promise', 'X-API-Key': tsmKey }
    })
    if (!scan.success) {
      return res.send(`Rejected. Error from TSM: ${scan.error}`)
    }

    console.log('scan insert')
    await this.db.collection('scans').insertOne({ slug, region, scanId, scannedAt })

    const bulk = this.db.collection('scanData').initializeUnorderedBulkOp()
    const bulkRegion = this.db.collection('regionData').initializeUnorderedBulkOp()

    const hour = scannedAtHour.getHours()
    for (const obj of scan.data) {
      // Update scanData
      const update = { $set: { } }
      update.$set[`details.${hour}`] = {
        marketValue: obj.market_value,
        minBuyout: obj.min_buyout,
        numAuctions: obj.num_auctions,
        quantity: obj.quantity
      }
      bulk.find({
        itemId: obj.item,
        scannedAt: scannedAtDay,
        slug,
        region
      }).upsert().updateOne(update)

      // Update regionData
      const updateRegion = { $inc: { } }
      updateRegion.$inc[`details.${hour}.marketValue`] = obj.market_value
      updateRegion.$inc[`details.${hour}.minBuyout`] = obj.min_buyout
      updateRegion.$inc[`details.${hour}.numAuctions`] = obj.num_auctions
      updateRegion.$inc[`details.${hour}.quantity`] = obj.quantity
      updateRegion.$inc[`details.${hour}.count`] = 1
      bulkRegion.find({
        itemId: obj.item,
        scannedAt: scannedAtDay,
        slug: region
      }).upsert().updateOne(updateRegion)
    }

    console.log('bulk op')
    if (scan.data.length) {
      const parallel = [bulk.execute(), bulkRegion.execute()]
      await Promise.all(parallel)
    }

    res.send('added!')
  }
}

module.exports = Scan