function queue(arr){
    arr.reduce((promise, n)=>{
        return promise.then(_=>{
            return new Promise(resolve => {
                console.log(n);
                resolve();
            });
        })
    },Promise.resolve())
}

let arr = [1, 2, 3, 4, 5];
queue(arr);