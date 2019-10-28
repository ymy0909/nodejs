'use strict';
//process
//process也是Node.js提供的一个对象，
//它代表当前Node.js进程。通过process对象可以拿到许多有用信息

const greet = require('./hello');
var s = 'Michael'
greet(s)

console.info(process === global.process)
console.dir(process.version)
console.warn(process.arch)
console.log(process.cwd())//当前工作目录
process.chdir('/Users/dream/node/nodejs/day02')
console.log(process.cwd())//当前工作目录
// 传入process.nextTick()的函数不是立刻执行，而是要等到下一次事件循环。
process.nextTick(function () {
        console.log('nextTick callback')
})
console.log('nextTick was set')
// 程序即将退出时的回调函数:
process.on('exit', function (code) {
        console.log('about to exit with code: ' + code);
});

// 判断JavaScript执行环境
// 有很多JavaScript代码既能在浏览器中执行，也能在Node环境执行，但有些时候，程序本身需要判断自己到底是在什么环境下执行的，常用的方式就是根据浏览器和Node环境提供的全局变量名称来判断：

if(typeof (window) === 'undefined'){
        console.log('node js')
}else {
        console.log('browser')
}
