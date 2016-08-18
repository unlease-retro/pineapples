const path = require('path')
const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '../app'),
  dist: path.join(__dirname, '../public')
}

module.exports = {

  devtool: 'eval',

  entry: PATHS.src,

  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new CleanPlugin(['bundle.js', 'bundle.js.map'], PATHS.dist)
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [ 'babel?cacheDirectory' ]
      }
    ]
  }

}
