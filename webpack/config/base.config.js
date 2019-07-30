var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
// 拆分css样式的插件
// var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

var resolve = (dir) => { // node执行路径 ，__dirname文件执行路径
  return path.resolve(process.cwd(), dir)
}

module.exports = {
  entry: [// 入口
    'react-hot-loader/patch',
    resolve("src/index.js"),
  ],
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
        //前置(在执行编译之前去执行eslint-loader检查代码规范，有报错就不执行编译)
        enforce: 'pre',
        test: /.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: [
            path.join(__dirname,'../node_modules')
        ]
    },
    {   //将jsx转换成 js
        test: /.jsx$/,
        loader: 'babel-loader'
    },
    {   //将ES6语法转成 低版本语法
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [//排除node_modules 下的js
            path.join(__dirname,'../node_modules')
        ]
    },
    {
      test: /\.(less|css)?$/,
      /* use: ExtractTextWebpackPlugin.extract({
        // 将css用link的方式引入就不再需要style-loader了
        fallback: "style-loader",
        use: ['css-loader', 'style-loader', 'postcss-loader' , 'less-loader'] // 从右向左解析
      }), */
      use: ['css-loader', 'style-loader', 'postcss-loader' , 'less-loader'],
      exclude: /node_modules/,
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
    extensions: ['.js', '.jsx', '.tsx', '.json'], // 自动补全的扩展名
    alias: {
      '@': resolve('src')
    }
  }
}