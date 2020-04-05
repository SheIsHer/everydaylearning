function FindKthToTail(head, k)
{
    let first = head;
    let second = head;
    let i = k;
    while(i--){
        first = first.next;
        if(first === null) return head.val
    }
    while(first !== null){
        first = first.next;
        second = second.next;
    }
    return second.val
}
function NodeList(x)