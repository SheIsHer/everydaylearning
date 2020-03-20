class myPromise {
  constructor(fn) {
    this.state = 'pending'
    this.value = undefined
    this.reson = undefined
    let resolve = value => {
      if(this.state === 'pending'){
        this.state = 'fulfilled'
        this.value = value
      }
    }
    let reject = reason => {
      if(this.state === 'pending'){
        this.state = 'rejected'
        this.reson = reason
      }
    }

    try{
      fn(resolve, reject)
    }catch(e){
      reject(e)
    }
  }
  then(onfulfilled, onrejected) {
    switch (this.state) {
      case 'fulfilled':
        onfulfilled(this.value)
        break;
      case 'rejected':
        onrejected(this.value)
        break; 
      }
  }
}

