Array.prototype.quickSort = function(){
    
    let l = this.length;
    if(l < 2) return this;
    let pivot = this[0];
    let right = [];
    let left = [];
    for(let i = 1; i < l; i++){
        if(this[i] > pivot){
            right.push(this[i]);
        }else{
            left.push(this[i]);
        }
    }
    return left.quickSort().concat(pivot, right.quickSort())
}

const arr = [5, 3, 7, 4, 1, 9, 8, 6];
console.log(arr.quickSort())