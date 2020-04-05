function minNumberInRotateArray(rotateArray)
{
    if(rotateArray.length == 0) return 0;
    for(let i = 1; i < rotateArray.length; i++){
        
        if(rotateArray[i] < rotateArray[i-1]){
            return rotateArray[i]
        }
    }
    return rotateArray[0]
}

console.log(minNumberInRotateArray([2, 2, 2, 0, 1]))