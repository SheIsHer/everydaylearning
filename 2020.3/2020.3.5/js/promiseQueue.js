function queue(arr){
    let promise = Promise.resolve();
    arr.map(v=>{
        promise = promise.then(_ =>{
            return new Promise(resolve=>{
                setTimeout(()=>{
                    console.log(v);
                    resolve();
                },1000)
            })
        })
    })
}


let arr = [1, 2, 3, 4, 5];
queue(arr);
    
