/**
 * shi.pengyan 2015-8-26 22:38:49
 */
var path = require('path');
var webpack = require('webpack');

var node_modules_dir = path.resolve(__dirname, 'node_modules');

//var deps = [
//  'react/dist/react.min.js',
//  'react-router/dist/react-router.min.js',
//  'react-bootstrap/dist/react-bootstrap.min.js',
//  'immutable/dist/immutable.min.js',
//  'antd/dist/antd-0.8.0.min.js'
//];

var config = {
  devtool: 'source-map',
  entry: {
    vendors: [ // good practice
      'jquery', 'immutable', 'pubsub-js',
      'react', 'react-tap-event-plugin', 'react-mixin',
      'material-ui', 'react-bootstrap',
      'react-router', 'reflux'
    ],
    index: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/modules/index.js'
    ],
    'antd': [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/antd/index.js'
    ]
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
      //  test: path.resolve(node_modules_dir, deps[0]),
      //  loader: "expose?React"
      //}, {
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
      loaders: ['react-hot', "style-loader", "css-loader"]
    }, {
      test: /\.less$/,
      loaders: ['react-hot', 'less-loader'],
      exclude: /node_modules/
    }, {
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel-loader?stage=0'],
      exclude: /(node_modules|bower_components)/,
      include: path.join(__dirname, 'src')
    }],
    noParse: [/pubsub-js/, /jquery/]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.min.js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

//deps.forEach(function (dep) {
//  console.log(dep);
//  //console.log(path.sep);//cannot use path.sep this is with platform
//  var depPath = path.resolve(node_modules_dir, dep);
//  config.resolve.alias[dep.split('/')[0]] = depPath;
//  config.module.noParse.push(depPath);
//});

module.exports = config;