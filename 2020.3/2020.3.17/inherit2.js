function Person(name){
  this.name = name;
  this.hello = function(){
    console.log(this.name + ' hello')
  }
}
function Student(name){
  Person.call(this, name)
  this.age = 12;
}

let stu2 = new Student('xiaohong')
stu2.hello()` `