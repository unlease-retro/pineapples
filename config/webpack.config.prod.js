const path = require('path')
const webpack = require('webpack')

const PATHS = {
  src: path.join(__dirname, '../app'),
  dist: path.join(__dirname, '../public')
}

module.exports = {

  devtool: 'source-map',

  entry:  PATHS.src,

  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }

}
