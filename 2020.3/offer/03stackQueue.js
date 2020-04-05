const inStack = [];
const outStack = [];
function push(val){
  inStack.push(val)
}
function pop(){
  if(outStack.length !== 0) return outStack.pop()
  else {
    while(inStack.length){
      outStack.push(inStack.pop())
      return outStack.pop()
    }
  }
}