var isMatch = function(s, p){
  var dp = new Array(s.length);
  dp.fill('-1');
  dp.forEach((item, index) => {
    dp[index] = new Array(p.length);
    dp[index].fill('-1')
  })
  function ismatch(s, p, i, j){
    if(i==0 || j==0){
      if(i == j){
        return true
      }
      if(j != 0 && p.charAt(j-1) == "*"){
        return ismatch(s, p.slice(0, -2), i, j-2) // 'a*'
      }
      return false;
    }
    if(dp[i-1][j-1] != '-1'){
      return dp[i-1][j-1];
    }
    if(i == 1 && j == 1){
      if(p.charAt(0) == '.'){
        dp[0][0] = true;
      }else{
        dp[0][0] = s==p;
      }
      return dp[0][0];
    }
    if(p.charAt(j-1) == "*"){
      if(s.charAt(i-1) == p.charAt(j-2) || p.charAt(j-2) == '.'){
        dp[i-1][j-1] = (
          ismatch(s, p.slice(0, -1), i, j-1) ||
          ismatch(s.slice(0, -1), p, i-1, j) ||
          ismatch(s, p.slice(0, -2), i, j-2)
        )
      }
    }else if(p.charAt(j-1) == '.' || p.charAt(j-1) == s.charAt(i-1)){
      dp[i-1][j-1] = ismatch(s.slice(0, -1), p.slice(0, -1), i-1, j-1);
    }else{
      dp[i-1][j-1] = false;
    }
    return dp[i-1][j-1]
  }
  return ismatch(s, p, s.length, p.length)
}