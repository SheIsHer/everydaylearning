Function.prototype.myApply = function(context){
    var context = context || window;
    context.fn = this;
    let result;
    if(arguments[1]){
        result = context.fn(...arguments[1])
    }else{
        result = context.fn()
    }
    delete context.fn;
    return result;
}

function add(){
    return this.x + this.y;
}

let obj = { x: 1 , y: 2};
console.log(add.myApply(obj));