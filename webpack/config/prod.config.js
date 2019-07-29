let baseConfig = require('./base.config');

const merge = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); //引入清除文件插件
// const CompressionPlugin = require('compression-webpack-plugin'); // gzip

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    /* new CompressionPlugin({
      asset: '[path].gz[qu]',
      algorithm: 'gzip',
      compressionOptions: '9',
      threshold: '8192',
      minRatio: '0.8' 
    }) */
  ]
})