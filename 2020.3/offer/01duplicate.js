var findRepeatNumber = function(nums) {
  return nums.reduce((prev, next)=>{
      if(typeof prev === 'number') return prev
      if(prev.includes(next)){
          return next
      }else return prev.push(next)
  }, [])
};

console.log(findRepeatNumber[2, 3, 2])
arr = []
arr.push(2)
console.log(arr)
console.log(arr.includes(3))