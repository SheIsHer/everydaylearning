Function.prototype.myBind = function(context) {
  if(typeof this !== 'function') {
    throw new TypeError('Error')
  }
  var _this = this
  var args = [...arguments.slice(1)]
  return function F(){
    return _this.apply(context, args.concat(...arguments))
  }
}

Function.prototype.myCall = function(context) {
  var context = context || window
  context.fn = this
  var args = [...arguments].slice(1)
  var result = context.fn(...args)
  delete context.fn
  return result
}

Function.prototype.myApply = function(context) {
  var context = context || window
  context.fn = this
  if(arguments[1]){
    // 展开第二个参数
    result = context.fn(...arguments[1])
  }else{
    result = context.fn
  }
  return result
}