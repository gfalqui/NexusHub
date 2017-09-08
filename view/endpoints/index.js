const Endpoint = require(blitz.config[blitz.id].endpointParent)

class Index extends Endpoint {
  constructor(api, db, url) {
    super(api, db, url)
    this.schema.description = "Primary Landing Page"
    this.schema.url = "/"
    this.schema.view = "templates/warframe/index.vue"
  }

  async main(req, res) {
    res.redirect("/warframe")
  }
}

module.exports = Index
