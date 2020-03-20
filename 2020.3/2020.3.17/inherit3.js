function Person(name){
  this.name = name;
  this.hello = function(){
    console.log(this.name + ' hello')
  }
}
Person.prototype.age = 20;
function Student(name){
    Person.call(this, name)
}
Student.prototype = new Person();
let stu3 = new Student('xiaoHu')
stu3.hello()
console.log(stu3.age)