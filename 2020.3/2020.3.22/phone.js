let ans1 = ['15112347234','15176313245','15176313346','15176313325','15166667234','15188847234']
ans = ans1.map(item=>item.slice(3))
function findLeopard(phoneNum){
  let reg1 = /\d{3}/
  let reg2 = /\d{4}/
  let reg3 = /\d{5}/
  let reg4 = /\d{6}/
  let reg5 = /\d{7}/
  let reg6 = /\d{8}/
  if(reg6.test(phoneNum)){
    return 8.5;
  }
  else if(reg5.test(phoneNum)){
    return 7.5
  }
  else if(reg4.test(phoneNum)){
    return 6.5
  }
  else if(reg3.test(phoneNum)){
    return 5.5
  }
  else if(reg2.test(phoneNum)){
    return 4.5
  }
  else if(reg1.test(phoneNum)){
    return 3.5
  }else{
    return 0
  }
}
function findCombo(phoneNum){
  let reg1 = /(123)|(234)|(345)|(456)|(567)|(678)|(789)|(012)/
  let reg2 = /(1234)|(2345)|(3456)|(4567)|(5678)|(6789)|(0123)/
  let reg3 = /(12345)|(23456)|(34567)|(45678)|(56789)|(01234)/
  let reg4 = /(123456)|(234567)|(345678)|(456789)|(012345)/
  let reg5 = /(1234567)|(2345678)|(3456789)|(0123456)/
  let reg6 = /(12345678)|(23456789)|(01234567)/
  if(reg6.test(phoneNum)){
    return 8;
  }
  else if(reg5.test(phoneNum)){
    return 7;
  }
  else if(reg4.test(phoneNum)){
    return 6;
  }
  else if(reg3.test(phoneNum)){
    return 5;
  }
  else if(reg2.test(phoneNum)){
    return 4;
  }
  else if(reg1.test(phoneNum)){
    return 3;
  }else{
    return 0;
  }
}
let res = []
for(let i = 0; i < ans.length; i++){
    let num1 = findLeopard(ans[i])
    let num2 = findCombo(ans[i])
    let num = Math.max(num1, num2)
    let obj = {num, i}
    res.push(obj)
}
res.sort((a, b) => {
  return b.num - a.num
})
var result = []
for(item of res){
  if(item.num > 0){
    result.push(ans1[item.i])
  }
}
console.log(result.join(','))
