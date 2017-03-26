#!/usr/bin/env node

/**
 * Globals
 */
global.cli = require('../config/log/logger.js')


/**
 * Local Dependencies
 */
const auth = require('./config/auth.js')


/**
 * Describes parent class which controls all objects handling input/output
 */
class api {

    constructor() {

        /**
         * Time measurement
         */
        cli.time(process.env.api_id, cli.chalk.reset("Port: " + process.env.api_port) + cli.chalk.green(' [online]'))


        /**
         * Actual Server Setup
         */

        // Setup HTTP (Express) server
        this.setupHttpServer()

        // Attach Socket.io to server
        .then(() => this.setupSockets())

        // Apply Standard Middleware
        .then(() => this.applyMiddleware())

        // Apply Routes/Events after middleware for correct order
        .then(() => this.applyRoutes())

        // Bind RequestController to server adapters
        .then(() => this.applyRequestController())


        /**
         * Finish time measurement
         */
        .then(cli.timeEnd(process.env.api_id, cli.chalk.reset("Port: " + process.env.api_port) + cli.chalk.green(' [online]')))
    }


    /**
     * Loads up instance of the http class including an express http server
     */
    setupHttpServer() {
        return new Promise((resolve, reject) => {

            // Load prerequisites
            let debug = require('./connections/debugger.js')
            let port = debug.normalizePort(process.env.api_port)

            // Set up Express server
            this.http = new(require('./connections/http.js'))(port)

            // When ready -> include debugger & resolve
            this.http.server.on('listening', listener => {
                debug.onListening(listener, this.http.server)
                resolve()
            })
        })
    }


    /**
     * Lets Socket.io connect to previously set up http server
     */
    setupSockets() {
        this.sockets = new(require('./connections/sockets.js'))(this.http.server)
    }


    /**
     * Applies Middleware to adapters
     */
    applyMiddleware() {

        // Enable JWT auth
        auth.configExpress(this.http.app)
        auth.configSockets(this.sockets)

        // Rate limiting middleware for express/sockets
        this.use((req, res, next) => auth.rateLimiter(req, res, next))
    }


    /**
     * Apply Routes/Events after Middleware for correct order
     */
    applyRoutes() {

        // Express
        require('./config/routes.js')(this.http)

        // Socket.io
        require('./config/events.js')(this.sockets)
    }


    /**
     * Loads RequestController into server adapters to process actual request handling
     */
    applyRequestController() {

        // Prepare RequestController Object
        let requestController = new(require('./controllers/requestController.js'))
        requestController.setClient(this.sockets)

        // Bind RequestController to adapters
        this.http.requestController = requestController
        this.sockets.requestController = requestController
    }


    /**
     * Sets up connection adapter middleware fired on each request
     */
    use(fn) {
        this.http.use(fn)
        this.sockets.use(fn)
    }
}

module.exports = new api
