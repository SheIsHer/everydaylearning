var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function * (a) {
  for(var i = 0; i < a.length; i++){
    if(typeof a[i] === 'number'){
      yield a[i]
    }else{
      yield * flat(a[i])
    }
  }
}

for (var f of flat(arr)){
  console.log(f)
}