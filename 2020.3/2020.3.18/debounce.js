function debounce(fn, wait=50){
  let timer;
  return function(){
    if(timer) clearTimeout(timer);
    timer = setTimeout(()=>{
      fn.apply(this, arguments)
    }, wait)
  }
}

function throttle(fn, delay){
  let timer;
  return function() {
    let last = timer;
    let now = Date.now();
    if(!last) {
      timer = now;
      fn.apply(this, arguments)
      return
    }
    if(last + delay > now) return;
    timer = now;
    fn.apply(this, arguments)
  }
}