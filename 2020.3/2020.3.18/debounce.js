function debounce(fn, wait = 50){
  let timer;
  return function(){
    if(!timer){
      setTimeout(()=>{
        fn.apply(this, arguments)
      }, wait)
    }else{
      clearTimeout(timer);
      timer = setTimeout(()=>{
        fn.apply(this, arguments)
      }, wait)
    }
  }
}