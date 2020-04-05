function currying(fn, args=[]){
  return function(...rest){
    args = [...rest, ...args]
    if(rest.length === 0){
      return fn(args)
    }
    else return currying(fn, args)
  }
}
let _add = function(arr){
  return arr.reduce((p, n) => {
    return p + n;
  }, 0)
}

let add = currying(_add)
console.log(add(3/2)())