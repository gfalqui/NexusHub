const Endpoint = require('cubic-api/endpoint')

/**
 * Provides crafting pricing information for an item
 */
class Crafting extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get crafting price information.'
    this.schema.url = '/wow-classic/v1/crafting/:server/:item'
    this.schema.request = { url: '/wow-classic/v1/crafting/anathema-alliance/2589' }
    const craftingObj = {
      amount: [Number, Number],
      requiredSkill: Number,
      category: String,
      reagents: [{
        itemId: Number,
        name: String,
        uniqueName: String,
        amount: Number,
        icon: String,
        marketValue: Number,
        vendorPrice: Number
      }]
    }
    this.schema.response = {
      itemId: Number,
      name: String,
      uniqueName: String,
      slug: String,
      createdBy: [Object],
      reagentFor: [{
        itemId: Number,
        name: String,
        uniqueName: String,
        icon: String,
        marketValue: Number,
        vendorPrice: Number,
        ...craftingObj
      }]
    }
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const slug = req.params.server.toLowerCase()
    let item = req.params.item

    const server = await this.db.collection('server').findOne({ slug })
    if (!server) {
      const response = {
        error: 'Not found.',
        reason: `Server ${slug} could not be found.`
      }
      this.cache(response, 60 * 60)
      return res.status(404).send(response)
    }

    item = !isNaN(parseFloat(item)) && isFinite(item) ? parseInt(item) : false
    const findItem = await this.db.collection('items').findOne(item ? { itemId: item } : { uniqueName: req.params.item.toLowerCase() })
    if (!findItem) {
      const response = {
        error: 'Not found.',
        reason: `Item ${req.params.item} could not be found.`
      }
      this.cache(response, 60 * 60)
      return res.status(404).send(response)
    }
    if (!item) item = findItem.itemId // Set ID if API call was made with unique name

    const items = await this.db.collection('items').find({
      $or: [
        { $and: [{ itemId: item }, { createdBy: { $exists: true } }] },
        { 'createdBy.reagents.itemId': item }
      ]
    }).toArray()

    let createdBy = []
    const reagentFor = []
    const itemStorage = {}

    // Add raw data to return arrays, also to storage for later data processing
    for (const entry of items) {
      if (entry.itemId === item) {
        createdBy = createdBy.concat(entry.createdBy)
      } else {
        entry.createdBy = entry.createdBy.filter((x) => x.reagents.some((e) => e.itemId === item))
        const reagent = {
          itemId: entry.itemId,
          name: entry.name,
          uniqueName: entry.uniqueName,
          icon: entry.icon // `https://wow.zamimg.com/images/wow/icons/large/${entry.icon}.jpg`
        }
        if (!itemStorage[entry.itemId] || !Object.keys(itemStorage[entry.itemId]).length) itemStorage[entry.itemId] = reagent
        reagentFor.push({ ...reagent, createdBy: entry.createdBy })
      }

      for (const e of entry.createdBy) {
        for (const x of e.reagents) if (!itemStorage[x.itemId]) itemStorage[x.itemId] = {}
      }
    }

    // Get missing item meta and price data
    const parallel = []
    parallel.push(this.db.collection('items').find({
      itemId: { $in: Object.keys(itemStorage).filter((key) => !Object.keys(itemStorage[key]).length).map((v) => parseInt(v)) }
    }).toArray())
    for (const i of Object.keys(itemStorage).map((v) => parseInt(v))) {
      parallel.push(this.db.collection('currentData').findOne({ itemId: i, slug }))
    }
    const [metaData, ...priceData] = await Promise.all(parallel)

    // Merge missing data
    for (const i of Object.keys(itemStorage).map((v) => parseInt(v))) {
      const entryMeta = metaData.find((x) => x.itemId === i)
      const entryPrice = priceData.find((x) => x ? x.itemId === i : false)
      itemStorage[i] = { ...itemStorage[i], ...entryMeta, ...entryPrice }
    }

    // Apply missing data
    const applyData = (applyItem = undefined) => {
      return (cby) => {
        const reagents = cby.reagents.map((r) => {
          const storage = itemStorage[r.itemId]
          return {
            ...r,
            name: storage.name,
            uniqueName: storage.uniqueName,
            icon: `https://wow.zamimg.com/images/wow/icons/large/${storage.icon}.jpg`,
            marketValue: storage.marketValue || null,
            vendorPrice: storage.vendorPrice || null,
            recipes: storage.recipes,
            contentPhase: storage.contentPhase || undefined
          }
        })
        return { ...applyItem, ...cby, reagents }
      }
    }
    const applyReagentFor = (r) => {
      if (itemStorage[r.itemId].marketValue) r.marketValue = itemStorage[r.itemId].marketValue
      return r.createdBy.map(applyData({
        itemId: r.itemId,
        name: r.name,
        uniqueName: r.uniqueName,
        icon: `https://wow.zamimg.com/images/wow/icons/large/${r.icon}.jpg`,
        marketValue: r.marketValue,
        vendorPrice: r.vendorPrice || null,
        recipes: r.recipes,
        contentPhase: r.contentPhase || undefined
      }))
    }

    const response = {
      itemId: item,
      name: findItem.name,
      uniqueName: findItem.uniqueName,
      slug,
      createdBy: createdBy.map(applyData()),
      reagentFor: [].concat(...reagentFor.map(applyReagentFor))
    }
    this.cache(response, 60 * 60)
    return res.send(response)
  }
}

module.exports = Crafting
