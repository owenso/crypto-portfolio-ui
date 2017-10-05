var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  api: {
    root: 'http://localhost:8009',
    version: 'api/v1'
  }
})
