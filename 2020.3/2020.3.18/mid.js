function mid(root) {
  if(root) {
    let stack = [];
    while(stack.length > 0 || root) {
      if(root) {
        stack.push(root);
        root = root.left;
      }else{
        root = stack.pop();
        console.log(root);
        root = root.right;
      }
    }
  }
}

function pos(root) {
  if(root) {
    let stack1 = [];
    let stack2 = [];
    stack1.push(root);
    while(stack1.length > 0){
      root = stack1.pop();
      stack2.push(root);
      if(root.right) {
        stack1.push(root.right);
      }
      if(root.left) {
        stack1.push(root.left);
      }
    }
    while(stack2.length > 0){
      console.log(stack2.pop())
    }
  }
}