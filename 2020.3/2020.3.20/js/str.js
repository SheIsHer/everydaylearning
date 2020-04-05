var longestPalindrome3 = function(s) {
  let dp = [];
  for (let i = 0; i < s.length; i++){
    dp[i] = [];
  }
  let max = -1
  let str = ''
  for (let k = 0; k < s.length; k++){
    for (let i = 0; i+k < s.length; i++){
      let j = i + k;
      if(k == 0){
        dp[i][j] = true;
      } else if( k <= 2){
        if(s[i] == s[j]){
          dp[i][j] = true;
        }else{
          dp[i][j] = false;
        }
      } else {
        dp[i][j] = (dp[i+1][j-1] && s[i] === s[j]) ? true : false
      }
      if( j - i > max && dp[i][j]){
        max = j - i;
        str = s.substring(i, j+1)
      }
    }
  }
  return str;
}

console.log(longestPalindrome3('bcba'))