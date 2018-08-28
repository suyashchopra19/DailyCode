// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:

// Given n will always be valid.

const ListNode = val => {
    this.val = val;
    this.next = null;
}

function removeNthFromEnd(head, n) {

    let p1 = head.next;
    let p2 = head;

    while (p1) {
        if (n > 0) n--
            else p2 = p2.next;
        p1 = p1.next
    }
    if (n === 1) return head.next
    p2.next = p2.next.next || null
    return head;
}