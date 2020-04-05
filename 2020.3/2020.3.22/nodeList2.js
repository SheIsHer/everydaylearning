var removeNthfromChild = function(head, n){
  let first = head
  for(let i = 0; i < n; i++){
    first = head.next
  }
  if(!first) return head.next
  let second = head
  while(first.next){
    second = second.next;
    first = first.next;
  }
  second.next = second.next.next;
  return head;
}