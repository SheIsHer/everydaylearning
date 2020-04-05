Function.prototype.myBind = function(obj){
  var that = this;
  var args = [...arguments].slice(1);
  return function F(){
    if(this instanceof F){
      return new that(...args, ...arguments)
    }
    return that.apply(obj, args.concat(...arguments))
  }
}