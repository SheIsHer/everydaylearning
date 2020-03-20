
function add(arr){
  return arr.reduce((prev, next)=>{
    return prev + next
  }, 0)
}
function getTime(n, m, p, q, arr){
  sum1 = 0;
  sum1 += k * p + q;
  tsum = add(arr)
  if(m >= n * tsum){
    return n * sum1
  }else{
    return getTime(n-1, m, p, q, arr) 
  }
}
