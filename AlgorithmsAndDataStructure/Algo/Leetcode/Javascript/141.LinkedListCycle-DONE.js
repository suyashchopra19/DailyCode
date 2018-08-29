// Given a linked list, determine if it has a cycle in it.

// Follow up:
// Can you solve it without using extra space?

function hasCycle(head){
    if (!head || !head.next) return false
    
    var slow = head
    var fast = head.next
    
    while(fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow == fast) return true
    }
    
    return false
}