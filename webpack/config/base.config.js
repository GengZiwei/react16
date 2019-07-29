var HtmlWebpackPlugin = require('html-webpack-plugin');
// 拆分css样式的插件
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
var path = require('path');

var resolve = (dir) => { // node执行路径 ，__dirname文件执行路径
  return path.resolve(process.cwd(), dir)
}

module.exports = {
  entry: { // 入口文件
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
      /* {
        test: /\.tsx$/,
        use: 'babel-loader',
        include: [resolve('src')],
        exclude: /node_modules/
      }, */
      {
        test: /\.(js|jsx)$/,
        use: [
          {loader: 'babel-loader'},
          // 'eslint-loader'
        ],
        include: [resolve('src')],
        exclude: /node_modules/
      },
      {
        test: /\.(less|css)?$/,
        use: ExtractTextWebpackPlugin.extract({
          // 将css用link的方式引入就不再需要style-loader了
          fallback: "style-loader",
          use: ['css-loader', 'less-loader'] // 从右向左解析
        }),
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
  optimization: {
    splitChunks: { // 提取公共模块
      chunks: 'all'
    }
  },
  resolve: {
    extensions: ['.js', 'jsx', '.tsx', '.json'], // 自动补全的扩展名
    alias: {
      '@': resolve('src')
    }
  }
}