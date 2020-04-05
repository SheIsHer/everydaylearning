function getI(ans){
    if(ans.length == 0) return -1
    if(ans.length == 1) return -1
    if(ans.length == 2){
        if(a[1] < a[0]){
            return 1
        }else{
            return 0
        }
    }
    let max1 = ans[0] > ans[1] ? ans[0] : ans[1]
    let max2 = ans[0] > ans[1] ? ans[1] : ans[0]
    res = []
    if(ans[0] > ans[1]){
        console.log(1)
    }
    for(let i = 2; i < ans.length; i++){
        if(ans[i] >= max1){
            max2 = max1;
            max1 = ans[i];
        }
        else if(max1 > ans[i] && ans[i] >= max2){
            res.push(i)
            max2 = ans[i]
        }
    }
    return res.join(' ');
}

console.log(getI([1, 22, 22, 33, 22, 12, 45, 44, 5]))