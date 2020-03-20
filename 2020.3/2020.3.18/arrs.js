arr1 = [1, 3, 5, 7, 9]
arr2 = [2, 4, 6, 8, 10]
function getMax(arr){
  let max = -1
  let maxI = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
      maxI = i;
    }
  }
  return arr.splice(maxI, 1)[0]
}
let res1 = getMax(arr1) + getMax(arr1) + getMax(arr1);
let res2 = getMax(arr2) + getMax(arr2) + getMax(arr2);
let res = res1 > res2 ? res1 : res2
console.log(res)
