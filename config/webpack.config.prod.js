const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const paths = require('./paths.config')
const commonConfig = require('./webpack.config.common')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const prodConfig = {
  output: {
    path: paths.build
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
              minimize: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: { path: path.resolve(__dirname, 'postcss.config.js') },
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  optimization: {
    // Do not minimize output, because some parts of the code rely on comparing
    // <instance>.constructor.name to a string
    minimize: false
  },

  plugins: [
    // Copy static files
    new CopyWebpackPlugin(
      [{ from: paths.static, to: paths.build }],
      { ignore: ['.DS_Store', '.gitkeep'] }
    ),

    // Minification and size optimization
    new MiniCssExtractPlugin({ filename: '[hash].css' }),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' } }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  mode: 'production',
  devtool: 'source-map'
}

module.exports = merge(commonConfig, prodConfig)
