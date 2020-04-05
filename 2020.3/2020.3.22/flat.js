var flat = function * (s) {
  for(var i = 0; i < s.length; i++){
    if(typeof s[i] === 'number'){
      yield s[i]
    }else{
      yield * flat(s[i])
    }
  }
}

let arr = [[2, 5], [3], [7, 9, [2, 4]]]
for( var item of flat(arr)){
  console.log(item)
}

let throttle = function(fn, delay){
  let timer;
  return function(){
    let now = Date.now()
    if(!timer){
      fn.apply(this, arguments)
      timer = now;
    } else {
      if(timer + delay > now) return;
      fn.apply(this, arguments)
    }
  }
}