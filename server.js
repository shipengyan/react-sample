/**
 * Created by shi.pengyan on 2015/8/25.
 */
var fs = require('fs-extra');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

clearBuildDir();

function clearBuildDir() {
  fs.emptyDirSync('./build');
  console.log('clean build dir');
}

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  colors: true
}).listen(3000, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Listening at localhost:3000');
  });
