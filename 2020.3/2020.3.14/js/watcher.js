class Subject {
  constructor(state){
    this.state = state;
    this.observers = []
  }
  getState() {
    return this.getState
  }
  setState(state) {
    this.state = state;
    this.notifyAllObservers()
  }
  attach(observer) {
    this.observers.push(observer)
  }
  notifyAllObservers() {
    this.observers.forEach(observer => {
      observer.update()
    })
  }
}

class Observer {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.subject.attach(this)
  }
  update() {
    console.log(`${this.name} updated ${this.subject.state}`)
  }
}

let s = new Subject();
let o1 = new Observer('o1', s)
let o2 = new Observer('o2', s)
let o3 = new Observer('o3', s)
s.setState(1)
s.setState(2)
s.setState(3)