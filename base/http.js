'use strict';

var http = require('http'),
    path = require('path'),
    fs = require('fs'),
    url = require('url');

// 文件服务器

//从命令行参数获取root目录，默认是当前目录:
var root = path.resolve(process.argv[2] || '.')
console.log('Static root dir: ' + root);

// 解析当前目录
// var workDir = path.resolve('.');

// 组合完整的文件路径:当前目录+'pub'+'index.html':
// var filePath = path.join(workDir, 'pub', 'index.html');

var server = http.createServer(function(request,response){
  // 获得URL的path，类似 '/css/bootstrap.css':
  var pathname = url.parse(request.url).pathname
  // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
  var filepath = path.join(root, pathname);
  console.log('filepath：'+filepath)
  // 获取文件状态:
  fs.stat(filepath,function(err,stats){
    if (!err && stats.isFile()) {
      // 没有出错并且文件存在:
      console.log('200 ' + request.url);
      // 发送200响应:
      response.writeHead(200);
      // 将文件流导向response:
      //response对象本身是一个Writable Stream，
      // 直接用pipe()方法就实现了自动读取文件内容并输出到HTTP响应。
      fs.createReadStream(filepath).pipe(response);
  } else {
      // 出错了或者文件不存在:
      console.log('404 ' + request.url);
      // 发送404响应:
      response.writeHead(404);
      response.end('404 Not Found');
    }
  })
})


server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');


// var server = http.createServer(function(request,response){
//     console.log(request.method+':'+request.url)
//     response.writeHead(200,{'Content-type':'text/html'})
//     response.end('<h1>hello world</h1>')
// })

// server.listen(8080)
// console.log('Server is running at http://127.0.0.1:8080/');

