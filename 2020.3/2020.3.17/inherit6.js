function content(proto){
  function F(){}
  F.prototype = proto;// 指向原型
  return new F();
}

function Person(name){
  this.name = name;
  this.hello = function(){
    console.log(this.name + ' hello')
  }
}
Person.prototype.age = 10;
function Student(name){
  Person.call(this, name);  //继承构造函数
  this.height = 180
}

let con = content(Person.prototype)
Student.prototype = con;

con.constructor = Student;

let stu6 = new Student('abc');
console.log(stu6)
