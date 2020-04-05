function NumberOf1(n)
{
    sig = n > 0 ? 1 : -1;
    n = n * sig;
    if(n === 0) return 0;
    let count = 0;
    while(n){
        if (n % 2 == 0){
            n = n / 2;
        }else {
            n = n - 1;
            count++
        }
    }
    if(sig < 0){
      if (n * sig === -1) return 32
      else{
        return 32-count
      }
    }
    return count
}
console.log(NumberOf1(-32))