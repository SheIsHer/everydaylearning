function getObj(o){
  function F(){}
  F.prototype = o;
  return new F()
}

function Person(name){
  this.name = name;
  this.hello = function(){
    console.log(this.name + ' hello')
  }
}

function Student(name){
  let sub = getObj(new Person());
  sub.name = name;
  return sub;
}

let stu5 = Student('xiaohua');
console.log(stu5.name)
