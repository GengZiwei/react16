const baseConfig = require('./base.config');
const merge = require('webpack-merge');


module.exports = merge(baseConfig, {
  mode: 'development',
  /* plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热更新模块
  ] */
})