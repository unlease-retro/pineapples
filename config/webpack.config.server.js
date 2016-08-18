const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const PATHS = {
  server: path.resolve(__dirname, '../server'),
  dist: path.resolve(__dirname, '../build'),
  modules: path.resolve(__dirname, '../node_modules')
}

module.exports = {

  entry: { index: PATHS.server },

  output: {
    path: PATHS.dist,
    filename: '[name].js'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ],

  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(PATHS.modules).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  node: {
    __filename: true,
    __dirname: true
  },

  module: {
    loaders: [
      {
        test: /\.json/,
        exclude: /node_modules/,
        loader: 'json'
      }
    ]
  }

}
