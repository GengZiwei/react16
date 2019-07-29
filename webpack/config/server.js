const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const os = require('os');
const open = require('open')
const config = require('./dev.config.js');


const options = { // 开启默认服务端口 指向默认文件 dist
  port: 8088,
  host: "0.0.0.0",
  compress: true, // 开启服务器压缩
  contentBase: './src', // 服务器从哪个目录中提供内容
  disableHostCheck: true, // 跳过主机检测
  hot: true, // 热加载
  quiet: true, // 不打印webpack执行时候log
  clientLogLevel: 'none', // 关闭开发时候的 log
    // open:true, // 拉起浏览器
    // hotOnly: true, // 启动热更新, 不页面刷新
    // allowedHosts: [], // 白名单地址
    
}

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);
const ifaces = os.networkInterfaces()

let ip = '0.0.0.0';

for (const key in ifaces) {
  let element = ifaces[key];
  element.forEach(function(details) {
    if(details.family === 'IPv4' && !details.internal) {
      ip = details.address;
      return;
    }
  })
}

server.listen(options.port, options.host, () => {
  console.log('执行成功')
  let webHttp = `http://${ip}:${options.port}`;
  let localhost = `http://localhost:${options.port}`;
  open(webHttp)
  console.log(`
  ${localhost}
  ${webHttp}`)
});