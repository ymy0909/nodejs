var express = require("express");

//创建服务器
var app = express()
//引入框架模板
// app.engine("html",require("express-art-template"))

//接受并反馈数据渲染到页面
app.get('/',function(req,res){
  res.send('我是相应给客户端的一个字符串')
  // res.render("index.html",{
  //   name:'小可爱'
  // })
})
app.listen(3000,function(){
  console.log('Server is running at http://127.0.0.1:3000/')
})