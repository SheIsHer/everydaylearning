function p(arr, N, ans){
  if(N === 0) return ans;
  if(ans.length === 0) return(p(arr, N-1, arr.slice(0)))
  
  let res = []
  for(let c = 0; c < arr.length; c++){
    let item = arr[c];
    ans.forEach(element => {
      let el = element + item;
      res.push(el)
    });
  }
      
  return p(arr, N-1, res)
  }

console.log(p(['1', '2'], 4, []))
