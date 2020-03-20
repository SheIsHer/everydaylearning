const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  const that = this;
  this.state = PENDING;
  this.value = null;
  
  that.resolvedCallbacks = [];
  that.rejectedCallbacks = [];

  function resolve(value){
    if(that.state = PENDING){
      that.state = RESOLVED;
      that.value = value;
      setTimeout(that.resolvedCallbacks.map(cb => cb(that.value)), 0)
    }
  }
  function reject(reason){
    if(that.state = PENDING){
      that.state = REJECTED;
      that.value = reason;
      setTimeout(that.resolvedCallbacks.map(cb => cb(that.value)), 0)
    }
  }

  try{
    fn(resolve, reject)
  }catch(e){
    reject(e)
  }

}
function resolvePromise(promise2, x, resolve, reject) {
  //...
  if(promise2 === x){
    reject(new TypeError('Promise 发生了循环引用'))
  }

  if(x !== null && (typeof x === 'object') || typeof x === 'function'){
    try {
      let then = x.then; 
      if (typeof then === 'function') {
          let y = then.call(x, (y) => {
              //递归调用，传入y若是Promise对象，继续循环
              resolvePromise(promise2, y, resolve, reject);
          }, (r) => {
              reject(r);
          });
      } else {
          resolve(x);
      }
  } catch (e) {
      reject(e);
  }
  }else{
    resolve(x)
  }
}
MyPromise.prototype.then = function(onFulfilled, onRejected){
  const that = this;

  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v=>v;
  onRejected = typeof onRejected === 'function' ? onRejected: e=> {throw e};

  if(this.state === PENDING){
    this.resolvedCallbacks.push(onFulfilled);
    this.rejectedCallbacks.push(onRejected);
  }
  if(this.state === RESOLVED){
    let x = onFulfilled(that.value);
    resolvePromise(promise2, x, resolve, reject)
  }
  if(this.state === REJECTED){
    onRejected(that.value)
  }
  let promise2 = new MyPromise(()=>{
  })
}