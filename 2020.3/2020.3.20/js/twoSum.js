let twoSum = (nums, target)=>{
  let targetMap = new Map();
  nums.forEach((element, index) => {
    key = index;
    value = target - element;
    targetMap.set(value, key)
  });
  for(let i = 0; i < nums.length; i++){
    key = target = nums[i];
    if(targetMap.has(key)){
      return [targetMap.get(key), i]
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 9))