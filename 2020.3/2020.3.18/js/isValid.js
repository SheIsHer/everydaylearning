var isValid = function(S) {
  let reg = /abc/
  if(S === 'abc'){
    return true;
  }
  if(reg.test(S)){
    return isValid(S.replace(reg,''))
  }else{
    return false;
  }
};

console.log(isValid('abcabc'))