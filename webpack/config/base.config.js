var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const resolve = (dir) => { // node执行路径 ，__dirname文件执行路径
  return path.resolve(process.cwd(), dir)
}

module.exports = {
  entry: { // 入口文件s
    app: resolve("src/index.js"),
  },
  output: { // 输出到dist
    publicPath: '/',
    path: resolve('dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[hash].request.js'
  },
  /* Loaders */
  module: {
    rules: [ // test 匹配 use 进行执行
      {
        test: /\.(js|jsx|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|ttf|eot|png|jpg|jpeg|gif|svg)(\?v=\d+\.\d+\.\d+)?$/i, // 图片加载
        loader: 'url-loader',
        query: {
          limit: 10000
        }
      }
    ],
  },
  /*  */
  plugins: [ // 使用模板html
    new HtmlWebpackPlugin({template: resolve('index.html')})
  ],
  resolve: {
    extensions: ['.js', 'jsx', '.tsx', '.json'], // 自动补全的扩展名
    alias: {
      '@': resolve('src')
    }
  }
}