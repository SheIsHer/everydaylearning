var arr = [1, 'a', '1', 2, '2', 'b', 'b', null, null, , ,'null'];
var obj = {}
var result = []

for(var i = 0; i < arr.length; i++) {
  var key = typeof arr[i] + arr[i];
  if(!obj[key]){
    obj[key] = true;
    result.push(arr[i])
  }
}

console.table(result)