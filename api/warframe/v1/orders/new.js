const Endpoint = cubic.nodes.warframe.core.Endpoint
const Orders = require('./index.js')
const Opm = require('./opm.js')
const User = require('../users/new.js')
const Prices = require('../items/prices.js')
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

class Order extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Stores a new order to the database.'
    this.schema.method = 'POST'
    this.schema.scope = 'write_orders_warframe'
    this.schema.url = '/warframe/v1/orders'
    this.schema.request = {
      body: {
        user: '[DE]Glen',
        offer: 'Buying',
        item: 'Nikana Prime',
        component: 'Set',
        price: 900,
        rank: 0,
        quantity: 1,
        message: 'Hello, I\'m Glen and I\'d like to buy Ammo Drum for 900p. I won\'t ban you, promise.',
        source: 'Trade Chat',
        online: true,
        createdAt: new Date()
      }
    }
    this.schema.response = String
  }

  async main (req, res) {
    const request = req.body
    const item = title(request.item)
    const _res = { send () {} }
    _res.status = () => res

    // Process offer
    request.createdAt = new Date()
    this.publish(request)
    await this.db.collection('activeOrders').insertOne(request)
    await this.db.collection('orders').insertOne(request)

    // Create user if they don't already exist
    const user = new User(this.api, this.db, `/warframe/v1/users/${request.user}`)
    await user.addUser({
      name: request.user,
      online: true
    })

    // Update OPM for this item
    const opm = new Opm(this.api, this.db, `/warframe/v1/orders/opm?item=${item}`)
    const opmData = await opm.filter(item)
    opm.publish(opmData)
    opm.cache(opmData, 60)

    // Update OPM for all items
    const opmAll = new Opm(this.api, this.db, `/warframe/v1/orders/opm`)
    const opmDataAll = await opm.filter()
    opmAll.publish(opmDataAll)
    opmAll.cache(opmDataAll, 60)

    // Update offer list
    const orders = new Orders(this.api, this.db, `/warframe/v1/orders?item=${item}`)
    const { result, discard } = await orders.filter(item)
    orders.publish(result)
    orders.cache(result, 60 * 5)
    orders.discard(discard)

    // Update prices
    const prices = new Prices(this.api, this.db, `warframe/v1/items/${item}/prices`)
    const stored = await this.db.collection('items').findOne({ name: item })
    if (stored) {
      const priceData = await prices.get(item, 7, stored)
      prices.cache(priceData, 60 * 60 * 24)
      prices.store(item, priceData, stored)
    }

    res.send('added!')
  }
}

module.exports = Order
