function debouncing(fn, wait=50, immidiate) {
  let timer
  return function(){
    if(immidiate) {
      fn.apply(this, arguments)
    }
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, 50)
  }
}

function throttle(fn, wait) {
  let prev = new Date();
  return function() {
    const now = new Date();
    if(now - prev > wait) {
      fn.apply(this, arguments)
      prev = new Date()
    }
  }
}