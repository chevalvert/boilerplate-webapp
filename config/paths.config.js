const path = require('path')
const pckg = require('../package.json')

const appEnv = process.env.APP_ENV || process.env.NODE_ENV || 'development'

// Add a base href for your APP_ENV if needed
let publicPaths = {
  ghpages: '/' + pckg.name + '/'
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
  public: publicPaths[appEnv],

  // Used by the module bundler
  build: path.join(__dirname, '..', 'build'),
  root: path.join(__dirname, '..'),
  src: path.join(__dirname, '..', 'src'),
  static: path.join(__dirname, '..', 'static'),

  // Node-Resolve aliases
  aliases,

  // Generating page from content and layouts
  pages: path.join(__dirname, '..', 'src', 'pages'),
  partials: path.join(__dirname, '..', 'src', 'pages')
}
