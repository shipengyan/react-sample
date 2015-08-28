/**
 * shi.pengyan 2015-8-26 22:38:49
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var node_modules_dir = path.resolve(__dirname, 'node_modules');
var ReactHomePath = path.resolve(node_modules_dir, 'react');

var deps = [
  'react/dist/react.min.js',
  'react-router/dist/react-router.min.js'
];

var config = {
  devtool: 'source-map',
  entry: {
    vendors: [//good practice
      'jquery', 'immutable', 'pubsub-js',
      'react', 'react-tap-event-plugin', 'react-mixin',
      'material-ui', 'react-bootstrap',
      'react-router', 'reflux'
    ],
    index: ['./src/modules/index.js']
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/build/',
    filename: '[name].min.js',
    chunkFilename: "[name].min.js"
  },
  resolve: {
    alias: {},
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: path.resolve(node_modules_dir, deps[0]),
      loader: "expose?React"
    }, {
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
      loaders: ['babel-loader?stage=0'],
      exclude: /(node_modules|bower_components)/,
      include: path.join(__dirname, 'src')
    }],

    //这里不能忽略react，否则不能合并到vendor中
    noParse: [/pubsub-js/, /jquery/]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.min.js'),
    new ExtractTextPlugin("[name].css", {
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        //supresses warnings, usually from module minification
        warnings: false
      }
    }),
    new webpack.NoErrorsPlugin()
  ]
};


deps.forEach(function (dep) {
  var depPath = path.resolve(node_modules_dir, dep);
  config.resolve.alias[dep.split(path.sep)[0]] = depPath;
  config.module.noParse.push(depPath);
});

module.exports = config;