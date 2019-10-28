// Node.js内置的fs模块就是文件系统模块，负责读写文件。
'user strict';

const fs = require('fs');

//异步读取文件
fs.readFile('sample.txt','utf-8',function(err,data){
  if(err){
    console.log(err)
  }else{
    // console.log(data)
  }
})
//异步读取文件 二进制文件
fs.readFile('cat.png',function(err,data){
  if(err){
    console.log(err)
  }else{
    // console.log(data)//Buffer对象 包含零个或任意个字节的数组
    console.log(data.length + ' bytes');
    // Buffer -> String
    var text = data.toString('utf-8');
    // console.log(text);
    // String -> Buffer
    var buf = Buffer.from(text, 'utf-8');
    // console.log(buf);
  }
})
//同步读取文件  先打印sample.txt的内容
try {
  var data = fs.readFileSync('sample.txt', 'utf-8');
  console.log(data);
} catch (err) {
  // 出错了
}
//异步写文件 如果传入的参数是Buffer，则写入的是二进制文件。回调函数由于只关心成功与否，
// var data = 'hello,Node.js';
// fs.writeFile('output.txt',data,function(err){
//   if(err){
//     console.log(err)
//   }else{
//     console.log('ok')
//   }
// })
//同步写文件
// var data = 'Hello, Node.js';
// fs.writeFileSync('output.txt', data);
// console.log('ok')


//stat 异步
//如果我们要获取文件大小，创建时间等信息，
//可以使用fs.stat()，它返回一个Stat对象，能告诉我们文件或目录的详细信息：
// fs.stat('sample.txt',function(err,stat){
//   if(err){
//     console.log(err)
//   }else{
//     //是否为文件
//     console.log('isFile'+ stat.isFile())
//     // 创建时间, Date对象:
//     console.log('birth time: ' + stat.birthtime);
//     // 修改时间, Date对象:
//     console.log('modified time: ' + stat.mtime);
//   }
// })
//stat()也有一个对应的同步函数statSync()
try {
  let stat = fs.statSync('sample.txt')
  // console.log(stat)
} catch (error) {
  
}
//绝大部分需要在服务器运行期反复执行业务逻辑的代码，必须使用异步代码

