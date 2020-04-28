const path = require('path')
const pckg = require('../package.json')

const appEnv = process.env.APP_ENV || process.env.NODE_ENV || 'development'

let publicPaths = {
  development: '/',
  ghpages: '/' + pckg.name + '/',
  preprod: '/',
  production: '/'
}

// Creating aliases based on package.json `aliases` object
const aliases = {}
if (pckg.aliases) {
  Object.entries(pckg.aliases).forEach(([aliasName, aliasPath]) => {
    aliases[aliasName] = path.resolve(__dirname, '../' + aliasPath)
  })
}

module.exports = {
  // Used by the devServer and base href
  public: publicPaths[appEnv] || publicPaths.development,

  // Used by the module bundler
  root: path.join(__dirname, '..'),
  src: path.join(__dirname, '..', 'src'),
  build: path.join(__dirname, '..', 'build'),
  static: path.join(__dirname, '..', 'static'),

  // Node-Resolve aliases
  aliases,

  // Generating page from content and layouts
  pages: path.join(__dirname, '..', 'src', 'pages'),
  partials: path.join(__dirname, '..', 'src', 'pages')
}
