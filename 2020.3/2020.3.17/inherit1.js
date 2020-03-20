function Person(name){
  this.name = name;
  this.hello = function(){
    console.log(this.name + ' hello');
  }
}
Person.prototype.age = 10;
function Student(name){
  this.name = name;
}
Student.prototype = new Person();
let stu1 = new Student('xiaoming')
console.log(stu1.age)
stu1.hello()