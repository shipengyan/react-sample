var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  //devtool: 'source-map',
  entry: {
    index: [
      './src/modules/index.js'
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
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    commonsPlugin,
    new ExtractTextPlugin("[name].css", {
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
