let baseConfig = require('./base.config');

const merge = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); //引入清除文件插件


module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin()
  ]
})