function isObject(obj){
  return Object.prototype.toString.call(obj) === '[object Object]'
}
function deepClone(source, hash = new WeakMap()){
  if(!isObject(obj)) return source
  if(hash.has(source)) return hash.get(source)
  let res = Array.isArray(source) ? [] : {}
  for(let key in source){
    if(Object.prototype.hasOwnProperty.call(source, key)){
      if(isObject(source[key])){
        res[key] = deepClone(source[key])
      }else{
        res[key] = source[key]
      }
    } 
  }
  return res
}
