const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./dev.config.js');
const options = { // 开启默认服务端口 指向默认文件 dist
    quiet: true, // 不打印console
    host: '0.0.0.0',
    disableHostCheck: true, // 跳过host检测
    hot: true, // 热加载
    hotOnly: true,
    port: 3000,
    contentBase: 'dist'
}

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(3000, 'localhost', () => {
});