var path = require('path');
var webpack = require('webpack');
var useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

console.log('Build to env ', process.env.BUILD_ENV, process.env.BUILD_VERSION, ' in progress');

module.exports = function () {
  useDefaultConfig.plugins.push(new webpack.EnvironmentPlugin(['BUILD_ENV', 'BUILD_VERSION']));

  return useDefaultConfig;
};
