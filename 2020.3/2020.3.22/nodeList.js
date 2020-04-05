let node = new ListNode('Head');
    let current = node, sum, n = 0;
    while(l1 || l2){
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        sum = n1 + n2 + n;
        current.next = new ListNode(sum % 10);
        current = current.next
        n = parseInt(sum / 10);
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    if(n){
        current.next = new ListNode(n)
    }
    return node.next;