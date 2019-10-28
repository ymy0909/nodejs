'use strict';
var fs = require('fs');

// stream是Node.js提供的又一个仅在服务区端可用的模块，目的是支持“流”这种数据结构。

//在Node.js中，流也是一个对象，我们只需要响应流的事件就可以了：data事件表示流的数据已经可以读取了，
// end事件表示这个流已经到末尾了，没有数据可以读取了，error事件表示出错了。

//流的特点是数据是有序的，而且必须依次读取，或者依次写入，不能像Array那样随机定位。
//从某个地方源源不断地到达另一个地方

//打开一个流
var rs = fs.createReadStream('sample.txt','utf-8');

rs.on('data',function(chunk){
  console.log(chunk)
})
rs.on('end', function () {
  console.log('END');
});
rs.on('error', function (err) {
  console.log('ERROR: ' + err);
});
//data事件可能会有多次，每次传递的chunk是流的一部分数据。
//要以流的形式写入文件，只需要不断调用write()方法，最后以end()结束：
var wsl = fs.createWriteStream('output1.txt','utf-8')
wsl.write('使用steam写入数据')
wsl.write('使用steam写入数据')
wsl.end()

// var ws2 = fs.createWriteStream('output2.txt');
// ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
// ws2.write(new Buffer('END.', 'utf-8'));
// ws2.end();

// 所有可以读取数据的流都继承自stream.Readable，
// 所有可以写入的流都继承自stream.Writable。

// pipe
// 就像可以把两个水管串成一个更长的水管一样，
// 两个流也可以串起来。
// 一个Readable流和一个Writable流串起来后，
// 所有的数据自动从Readable流进入Writable流，这种操作叫pipe。
// 用pipe()把一个文件流和另一个文件流串起来 这实际上是一个复制文件的程序：
var a = fs.createReadStream('sample.txt');
var b = fs.createWriteStream('copied.txt');

a.pipe(b);
// 默认情况下，当Readable流的数据读取完毕，end事件触发后，将自动关闭Writable流。
// 如果我们不希望自动关闭Writable流，需要传入参数：
// readable.pipe(writable, { end: false });