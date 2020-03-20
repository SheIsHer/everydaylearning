function * show(){
  console.log('a');
  let a = yield;
  console.log('b');
  console.log(a)
}

let gen = show();

gen.next(12);
gen.next(5);


