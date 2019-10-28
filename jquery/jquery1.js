//匿名自执行函数
(function(window,undefined){
  window.$ = jquery = function(nodeSelector){
    let nodes = {};
    // instanceof 更详细instance 可判断构造原型
    if(typeof nodeSelector === "string"){
       //typeof 判断引用类型只能得到object
       let temp = document.querySelectorAll(nodeSelector);
       for (let index = 0; index < temp.length; index++) {
        //  const element = temp[index];
         nodes[i] = temp[i];
       }
        //类数组  isArray
       nodes.length = temp.length
    }else{
      throw new Error('必须输入字符串')
    }
    nodes.addClass = function(classes){
        let className = classes.split(' ')
        className.forEach(value => {
          for (let i = 0; i < nodes.length; index++) {
                nodes[i].classList.add(value)
           }
        });
    }
    return nodes
  }
})()