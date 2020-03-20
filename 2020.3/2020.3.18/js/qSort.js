const qSort = arr => arr.length <= 1 ? arr :
  [
    ...qSort(arr.filter(item => item < arr[0])),
    ...arr.filter(item => item === arr[0]),
    ...qSort(arr.filter(item => item > arr[0]))
  ]

console.log(qSort([3,1,2,9,8]))