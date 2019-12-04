const baseConfig = require('./base.config');
const merge = require('webpack-merge');
const webpack = require('webpack')


module.exports = merge(baseConfig, {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {}
    }),
    new webpack.HotModuleReplacementPlugin(), // 热更新模块
  ]
})