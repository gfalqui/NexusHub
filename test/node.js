"use strict"

const Nexus = require('../../nexus-stats-api/index.js')

/**
 * Test Client to simulate all kinds of requests
 */
class Client {
    constructor() {
        this.client = new Nexus({
            //use_socket: false,
            //ignore_limiter: true,
            user_key: 'P4dE2whXjcCobnv8vdifPPEstOSBPXBjyRSY0I9HVJFAeJg5ag239zJdmwmEIQMN',
            user_secret: 'jwZAbyVCUEI8w2opF3huddTBXWuQkKAvS0v9GtBFYrwLBY765d6DQVFy0QhR2OO4'
        })

        this.client.on('ready', () => {

            // Launch test requests
            this.test()
        })
    }


    /**
     * Test Commands
     */
    test() {

        // Token Expiration Test
        setTimeout(() => {
            this.client.getItem('Nikana Prime').then(item => {

            })
        }, 15000)


        // Token Expiration Test
        setTimeout(() => {
            this.client.getItem('Nikana Prime').then(item => {

            })
        }, 25000)


        // Send POST manually while none in api package
        //this.client.connection.client.socket.emit("POST", {
        //        url: "https://api.nexus-stats.com/warframe/v1/items/request",
        //        body: {test: "test"}
        //}, ack => {
        //    //console.log('\n' + ack.body)
        //})

        //this.client.connection.client.send('POST', 'http://localhost:3400/warframe/v1/items/request', //{test: "test"})


        // Emit without callback
        //this.client.connection.client.socket.emit("GET", "trololo")
        //this.client.connection.client.socket.on("res", data => console.log(data))


        // Rate Limit Testing
        for (var i = 0; i < 20; i++) {
            this.client.getItem('Nikana Prime', {
                component: "Blade",
                //timestart: 3824983243892,
                timeend: 3894982348932
            }).then(item => {
                //console.log(item.body)
            }).catch(err => {
                //console.log('Error: ' + err.body)
            })
        }
    }
}

module.export = new Client()
