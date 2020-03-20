function Person(name){
  this.name = name;
  this.sun = function(){
    alert(this.name)
  }
}
Person.prototype.age = 10;
function Per(){
  this.name = 'ker';
}
Per.prototype = new Person();
var per1 = new Per();
console.log(per1.age)

function Con(){
  Person.call(this,'jer');
  this.age = 12;
}

var con1 = new Con();
console.log(con1.name);
console.log(con1.age);
console.log(con1 instanceof Person);

function SubType(name){
  Person.call(this, name);
}
SubType.prototype = new Person();
var sub = new SubType('gar');
console.log(sub.name);
console.log(sub.age);