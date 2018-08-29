// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

//Recursive
const mergeTwoLists = (l1,l2) => {
    if(!l1) return l2;
    if(!l2) return l1;
    if(l1<l2) {
        l1.next = mergeTwoLists(l1.next,l2)
        return l1;
    }
    if(l1>l2) {
        l2.next = mergeTwoLists(l2.next,l1)
        return l2;
    }
}

// Iteratvie
const mergeTwoLists = (l1,l2) => {
    let list = new ListNode(null);
    let head = list;

    while(l1 && l2){
        if(l1.val < l2.val){
            list.next = l1
            l1 = l1.next
        }else{
            list.next = l2
            l2 = l2.next
        }
        list = list.next
    }
    list.next = l1|| l2
    return head.next
}