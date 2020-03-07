Function.prototype.myCall = function(context){
    var context = context || window;
    context.fn = this;
    let args = [...arguments].slice(1);
    let result = context.fn(...args);
    delete context.fn;
    return result;
} 

function add(){
    return this.x + this.y;
}

let obj = { x: 1 , y: 2};
console.log(add.myCall(obj));
