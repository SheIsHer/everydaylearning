function LinkedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
  }

  let length = 0;
  let head = null;
  this.append = function (element) {
    let node = new Node(element)
    let current
    if (head === null) {
      head = node
    } else {
      current = head;
      while(current.next){
        current = current.next
      }
      current.next = node;
      length++;
    } 
  }
  this.removeAt = function (position) {
    if(position > -1 && position < length) {
      let current = head;
      let previous, index = 0;
      if(position === 0){
        head = current.next
      } else {
        while( index++ < position){
          previous = current;
          current = current.next;
        }
        previous.next = current.next
      }
      length--
      return current.element
    } else {
      return null
    }
  }
  this.insertAt = function (position, element){
    let node = new Node(element);
    let previous;
    let current = head;
    let index = 0;
    if(position > -1 && position <= length){
      if(position === 0){
        node.next = current;
        head = node;
      }else{
        while(index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = node;
        node.next = current;
      }
      length++;
      return true;
    }else{
      return false;
    }
    
    
  }
}