let arr = ['a', 'b'];
let keys = arr.values();
let { value, done } = keys.next();
console.log(value, done);