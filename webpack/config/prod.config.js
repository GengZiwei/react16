const baseConfig = require('./base.config');
const merge = require('webpack-merge');

const uglify = require('uglifyjs-webpack-plugin'); // 压缩
const extractTextPlugin = require("extract-text-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); //引入清除文件插件


module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new uglify(),
    new CleanWebpackPlugin(),
    new extractTextPlugin()
  ]
})