'use strict'
const config = require('../bin/templates')

module.exports = () => {
     console.log(config.tpl)
     process.exit()
}