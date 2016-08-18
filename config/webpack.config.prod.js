const path = require('path')
const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '../app'),
  dist: path.join(__dirname, '../public')
}

module.exports = {

  devtool: 'source-map',

  entry: { bundle: PATHS.src },

  output: {
    path: PATHS.dist,
    filename: '[name]-[hash].js',
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
    }),
    new CleanPlugin([ PATHS.dist ], { root: process.cwd() }),
    new CopyPlugin([ { from: './static', to: './' } ], { ignore: [ '.*' ] }),
    new HtmlWebpackPlugin({ template: 'app/index.html' })
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
