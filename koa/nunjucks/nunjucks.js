//Nunjucks引擎模板

const nunjucks = require('nunjucks')

function createEnv(path,opts){
  var 
    autoscape = opts.autoscape === undefined? true:opts.autoscape,
    noCache = opts.noCache || false,
    watch = opts.watch || false,
    throwOnUndefined = opts.throwOnUndefined || false
    env = new nunjucks.Environment(
      new nunjucks.FileSystemLoader('views',{
        noCache:noCache,
        watch:watch
      }),{
        autoscape:autoscape,
        throwOnUndefined:throwOnUndefined
      }
    )
  if(opts.filters){
    for (const f in opts.filters) {
      env.addFilter(f,opts.filters[f])
    }
  }
  return env
}


var hex = function(n){
  return 'OX' + n.toString(16)  
}

var evn = createEnv('views',{
  watch:true,
  filters:{
    hex:function(n){
        hex:hex
    }
  }
})



// var s = evn.render("hello.html",{name:'小明'})
// console.log(s)

console.log(env.render('extend.html', {
  header: 'Hello',
  body: 'bla bla bla...'
}));


// 变量env就表示Nunjucks模板引擎对象，
// 它有一个render(view, model)方法，正好传入view和model两个参数，并返回字符串。

// 创建env需要的参数可以查看文档获知。
// 我们用autoescape = opts.autoescape && true这样的代码给每个参数加上默认值，
// 最后使用new nunjucks.FileSystemLoader('views')
// 创建一个文件系统加载器，从views目录读取模板。