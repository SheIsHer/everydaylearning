function mergeSort(arr) {
  const length = arr.length;
  if (length === 1) {
    return arr;
  }
  const mid = Math.floor(length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, length);

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){
  const result = [];
  const il = 0;
  const ir = 0;
  while(il < left.length && ir < right.length){
    if(left[il] < right[ir]){
      result.push(left[il])
      il++;
    }else{
      result.push(right[ir])
      ir++
    }
  }
  while(il++ < left.length){
    result.push(left[il])
    il++
  }
  while(ir++ < left.length){
    result.push(right[ir])
    ir++
  }
  return result;
}