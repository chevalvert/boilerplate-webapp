const handlebars = require('handlebars')
const paths = require('./paths.config')
const isProduction = (process.env.NODE_ENV === 'production')
const store = require('../scripts/utils/store')
const pkg = require('../package.json')

module.exports = {
  // Auto import partial from paths.partials
  autoPartials: true,

  // Add your handlebars helpers here
  helpers: {
    nl2br (text) {
      const reg = /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g
      const nl2brStr = (text + '').replace(reg, '$1' + '<br>' + '$2')
      return new handlebars.SafeString(nl2brStr)
    },
    json (text) {
      return JSON.stringify(text)
    }
  },

  // you can mutate data if you need to change contentjuste before a rendering
  beforeRender (data) {
    // set compiler data for use inside layouts
    data.compiler = {
      name: pkg.name,
      hash: store.hash,
      devServer: (!isProduction) && store.devServerUrl,
      publicPath: paths.public,
      semver: pkg.version + (isProduction ? '' : '-dev'),
      isProduction
    }
  }
}
