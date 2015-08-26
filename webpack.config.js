var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    index: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/modules/index.js'
    ],
    vendors: ['react', 'jquery']
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
      loaders: ['react-hot', "style-loader", "css-loader"]
    }, {
      test: /\.less$/,
      loaders: ['react-hot', 'less-loader'],
      exclude: /node_modules/
    }, {
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel-loader'],
      exclude: /(node_modules|bower_components)/,
      include: path.join(__dirname, 'src')
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendor.js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
