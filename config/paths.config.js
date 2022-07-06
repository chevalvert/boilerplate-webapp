const path = require('path')
const pkg = require('../package.json')

const appEnv = process.env.APP_ENV || process.env.NODE_ENV || 'development'

// Add a base href for your APP_ENV if needed
const publicPaths = {
  ghpages: '/' + pkg.name + '/',
  development: '/',
  preprod: '/' + pkg.name + '/',
  production: '/' + pkg.name + '/'
}

// Creating aliases based on package.json `aliases` object
const aliases = {}
if (pkg.aliases) {
  Object.entries(pkg.aliases).forEach(([aliasName, aliasPath]) => {
    aliases[aliasName] = path.resolve(__dirname, '../' + aliasPath)
  })
}

aliases.test = path.resolve(__dirname, '../test')

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
  partials: path.join(__dirname, '..', 'src', 'pages'),
  test: path.join(__dirname, '..', 'test', 'test.js')
}
