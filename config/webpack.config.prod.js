const path = require('path')
const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '../app'),
  dist: path.join(__dirname, '../build'),
  styles: path.join(__dirname, '../app/shared/styles')
}

module.exports = {

  devtool: 'source-map',

  entry: { bundle: PATHS.src },

  output: {
    path: path.join(PATHS.dist, '/public'),
    filename: '[name]-[hash].js',
    publicPath: '/'
  },

  resolve: {
    alias: {
      styles: PATHS.styles,
    }
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
    new CopyPlugin([ { from: './static', to: './' },{ from: './package.json', to: '../package.json' } ], { ignore: [ '.*' ] }),
    new HtmlWebpackPlugin({ template: 'app/index.html', filename: 'app.html' })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }

}
