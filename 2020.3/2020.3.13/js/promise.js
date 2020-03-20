setTimeout(function(){
  console.log(1)
})
let p = new Promise(resolve=>{
  console.log(2)
  resolve()
}).then(function(){
  console.log(3)
})
console.table(4)