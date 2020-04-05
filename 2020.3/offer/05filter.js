function reOrder(arr){
  odd = arr.filter((x)=>{
    return x%2 === 1;
  })
  even = arr.filter((x) => {
    return x%2 === 0;
  })
  return [...odd, ...even]
}

let arr = [9, 3, 6, 7, 1, 2, 5, 4]
reOrder(arr)