export default {
  name: 'servers',
  state: {
    activeServer: {
      slug: '',
      name: '',
      region: '',
      faction: ''
    },
    serverlist: []
  },
  mutations: {
    setServerlist (state, list) {
      state.serverlist = list
    },
    setActiveServer (state, server) {
      server.slug = `${server.slug}-${server.faction}`
      state.activeServer = server
    }
  }
}
