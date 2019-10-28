'use strict';
//node --use_strict hello.js
var s = 'hello'
function greet(name){
  console.log(s+'  '+name)
}
module.exports = greet


// 如果要输出一个键值对象{}，可以利用exports这个已存在的空对象{}，并继续在上面添加新的键值；
// exports.foo = function () { return 'foo'; };

// 如果要输出一个函数或数组，必须直接对module.exports对象赋值。

// 所以我们可以得出结论：直接对module.exports赋值，可以应对任何情况：
//我们强烈建议使用module.exports = xxx的方式来输出模块变量，这样，你只需要记忆一种方法。