function DistanceToHigher( height ) {
    return height.map((item, index, arr)=>{
        frontArr = arr.slice(0, index);
        let frontIndex;
        for(var i = 0; i < frontArr.length; i++){
            if(frontArr[i] > item){
                frontIndex = i;
            }
        }
        if(frontIndex === undefined) return 0;
        return index - frontIndex
    })
}

let arr = [175, 173, 174, 163, 182, 177];
console.log(DistanceToHigher(arr))