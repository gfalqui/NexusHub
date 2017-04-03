/**
 * Globals
 */
require('./config/env.js')
global.cli = require('./config/log/logger.js')


/**
 * Dependencies
 */
const cluster = require('multi-cluster')


/**
 * Big useless Intro
 */
process.stdout.write('\033c')
cli.intro()


/**
 * Setup Clusters
 * Single process & watch for development.
 */
if (process.env.environment === 'development') {
    let api = new cluster('./api/node.js', 1)
    api.watch('./api')

    let src = new cluster('./core/node.js', 1)
    src.watch('./core')

    let tst = new cluster('./client/node.js', 1)
    tst.watch('./client')
}


/**
 * All cores w/o watch in production
 */
if (process.env.environment === 'production') {
    let api = new cluster('./api/app.js')
}