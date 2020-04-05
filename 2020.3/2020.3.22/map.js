function Subject(){
  this.observers = []
}
Subject.prototype = {
  add:function(observer){
    this.observers.push(observer)
  },
  remove: function(observer){
    var observers = this.observers;
    for(var i = 0; i < observers.length; i++){
      if(observers[i] == observer){
        observers.splice(i, 1)
      }
    }
  },
  notify: function(){
    var observers = this.observers;
    for(var i = 0; i < observers.length; i++){
      observers[i].update()
    }
  }
}

function Observer(name){
  this.name = name;
}

Observer.prototype = {
  update:function(){
    console.log('my name is ' + this.name)
  }
}

var sub = new Subject();
var obs1 = new Observer('ttsy1');
var obs2 = new Observer('ttsy2');
sub.add(obs1);
sub.add(obs2);
sub.notify();

let pubSub = {
  list:{},
  subsrcibe:function(key, fn){
    if (!this.list[key]){
      this.list[key] = []
    }
    this.list[key].push(fn)
  },
  publish:function(){
    let arg = arguments;
    let key = [].shift.call(arg);
    let fns = this.list[key];
    if(!fns || fns.length <= 0) return false
    for(var i = 0,len=fns.length; i<len; i++){
      fns[i].apply(this, arg)
    }
  },
  unSubscibe(key){
    delete this.list[key]
  }
}

pubSub.unSubscibe('name', (name) => {
  console.log('your name is' + name)
})
pubSub.subsrcibe('sex', (sex) => {
  console.log('your sex is ' + sex)
})
pubSub.publish('name', 'ttsy1')
pubSub.publish('sex', 'male')