function Person(name){
  this.name = name;
  this.hello = function(){
    console.log(this.name + ' hello');
  }
}
Person.prototype.age = 10
function extendObj(o){
  function F(){}
  F.prototype = o;
  return new F();
}

let p = new Person('xiaobai')
let stu4 = extendObj(p)
console.log(stu4.age)