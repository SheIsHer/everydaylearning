function Node(data, left = null, right = null) {
  this.data = data;
  this.left = left;
  this.right = right;
}

function BST(){
  this.root = null;
  this.add = function (data) {
    var node = this.root;
    if(node === null){
      this.root = new Node(data);
      return;
    }else{
      var searchTree = function(node) {
        if(data < node.data){
          if(node.left === null){
            node.left = new Node(data);
            return;
          }else if(node.left !== null){
            return searchTree(node.left)
          }
        }else if(data > node.data){
          if(node.right === null){
            node.right = new Node(data);
            return;
          }else if(node.right !== null){
            return searchTree(node.right)
          }
        }else{
          return null;
        }
      }
      return searchTree(node);
    }
  }

  this.findMin = function () {
    var current = this.root;
    while (current.left !== null){
      current = current.left;
    }
    return current.data;
  }

  this.findMax = function () {
    var current = this.root;
    while(current.right !== null){
      current = current.right
    }
    return right.data;
  }
  this.find = function () {
    var current = this.root;
    while(current.data !== data){
      if(data < current.data){
        current = current.left;
      }else{
        current = current.right;
      }
      if(current === null){
        return null;
      }
    }
    return current;
  }

  this.isPresent = function (data) {
    var current = this.root;
    while(current){
      if(data === current.data){
        return true;
      }
      if(data < current.data){
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}