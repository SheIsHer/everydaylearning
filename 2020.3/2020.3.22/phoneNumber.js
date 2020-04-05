function findLeopard(phoneNum){
  let reg1 = /(000)|(111)|(222)|(333)|(444)|(555)|(666)|(777)|(888)|(999)/
  let reg2 = /(0000)|(1111)|(2222)|(3333)|(4444)|(5555)|(6666)|(7777)|(8888)|(9999)/
  let reg3 = /(00000)|(11111)|(22222)|(33333)|(44444)|(55555)|(66666)|(77777)|(88888)|(99999)/
  let reg4 = /(000000)|(111111)|(222222)|(333333)|(444444)|(555555)|(666666)|(777777)|(888888)|(999999)/
  let reg5 = /(0000000)|(1111111)|(2222222)|(3333333)|(4444444)|(5555555)|(6666666)|(7777777)|(8888888)|(9999999)/
  let reg6 = /(00000000)|(11111111)|(22222222)|(33333333)|(44444444)|(55555555)|(66666666)|(77777777)|(88888888)|(99999999)/
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
let ans1 = ['15112347234','15176313245','15176313346','15176313325','15166667234','15188847234']
ans = ans1.map(item => item.slice(3))
let res = []
for(let i = 0; i < ans.length; i++){
    let num1 = findLeopard(ans[i])
    let num2 = findCombo(ans[i])
    let num = Math.max(num1, num2)
    let obj = {num, i}
    res.push(obj)
}
res.sort((a, b) => {
  if(b.num === a.num) return b.i - a.i
  return b.num - a.num
})
var result = []
for(item of res){
  if(item.num > 0){
    result.push(ans1[item.i])
  }
}
console.log(result.join(','))