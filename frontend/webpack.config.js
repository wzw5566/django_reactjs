var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  entry: [
    './assets/js/index'
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  },

  output: {
    path: path.resolve('./assets/bundles/'),
    filename: "bundle.js",
    sourceMapFilename: 'bundle.map',
  },

  devtool: '#source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-0', 'react']
        }
      }
    ]
  },

  context: __dirname,

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'})
  ],

  mode: 'development'
}