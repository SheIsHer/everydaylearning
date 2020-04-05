function sleep(interval){
  return new Promise(resolve=>{
    setTimeout(resolve, interval)
  })
}

async function stepCount(n){
  for(let i = 0; i < n; i++){
    console.log(i + 1)
    await sleep(1000)
  }
}

stepCount(5)