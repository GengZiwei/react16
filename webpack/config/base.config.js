var HtmlWebpackPlugin = require('html-webpack-plugin'); // html
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
  /* 
  test：用于匹配处理文件的扩展名的表达式，这个选项是必须进行配置的；
  use：loader名称，就是你要使用模块的名称，这个选项也必须进行配置，否则报错；
  include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
  query：为loaders提供额外的设置选项（可选）。
  */
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
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