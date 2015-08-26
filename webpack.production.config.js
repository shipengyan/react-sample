/**
 * shi.pengyan 2015-8-26 22:38:49
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var node_modules = path.resolve(__dirname, 'node_modules');
var ReactHomePath = path.resolve(node_modules, 'react');

module.exports = {
  devtool: 'source-map',
  entry: {
    index: [
      './src/modules/index.js'
    ],
    vendors: [//good practice
      'jquery', 'immutable', 'pubsub-js',
      'react', 'react-tap-event-plugin', 'react-mixin',
      'material-ui', 'react-bootstrap',
      'react-router', 'reflux'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/build/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.woff[0-9]?$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.ttf$/,
      loader: "file-loader"
    }, {
      test: /\.eot$/,
      loader: "file-loader"
    }, {
      test: /\.svg$/,
      loader: "file-loader"
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /(node_modules|bower_components)/,
      include: path.join(__dirname, 'src')
    }],
    noParse: ['/pubsub-js/', '/immutable/'] //这里不能忽略react，否则不能合并到vendor中
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendor.js'),
    new ExtractTextPlugin("[name].css", {
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        //supresses warnings, usually from module minification
        warnings: false
      }
    })
  ]
};
