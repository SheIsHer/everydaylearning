function sortting(obj) {
let resultAry = []
for (let i in obj) {
var temp = {}
temp[i] = obj[i]
temp.value = obj[i]
resultAry.push(temp)
}

resultAry.sort((a,b)=> b.value-a.value)
let result = []
for (let i = 0; i<resultAry.length; i++) {
delete resultAry[i].value
result = result.concat(Object.keys(resultAry[i]))
}
console.log(result)
}

let test = {bill:500, sam:480, roark:501}
sortting(test)