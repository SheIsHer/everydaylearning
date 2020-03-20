var findRightInterval = function(intervals) {
  result = intervals.map((section, index, arr) => {
      let leftIndex = section[0];
      let rightIndex = section[1];
      let result = arr.filter((item)=>{
        return item[0] >= rightIndex;
      })
      result = result.reduce((prev, next)=>{
        if(prev === -3838383) return next[0];
        return next[0] <= prev ? next[0] : prev
      }, -3838383)
      return result
  })
  let left = intervals.map((section) => {
    return section[0]
  })
  res = result.map((item)=>{
    return left.findIndex((i) => {
      return i === item
    })
  })
  return res;
};

let interval = [[1, 2], [2, 3], [1, 4], [8, 8]];
console.log(findRightInterval(interval));
