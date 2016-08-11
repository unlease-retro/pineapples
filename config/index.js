const Configstore = require('configstore')
const defaultConf = require('./default.json')

module.exports = new Configstore('unleasePineapples', defaultConf)
