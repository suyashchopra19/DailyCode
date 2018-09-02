// Given a linked list, rotate the list to the right by k places, where k is non-negative.

// Example 1:

// Input: 1->2->3->4->5->NULL, k = 2
// Output: 4->5->1->2->3->NULL
// Explanation:
// rotate 1 steps to the right: 5->1->2->3->4->NULL
// rotate 2 steps to the right: 4->5->1->2->3->NULL
// Example 2:

// Input: 0->1->2->NULL, k = 4
// Output: 2->0->1->NULL
// Explanation:
// rotate 1 steps to the right: 2->0->1->NULL
// rotate 2 steps to the right: 1->2->0->NULL
// rotate 3 steps to the right: 0->1->2->NULL
// rotate 4 steps to the right: 2->0->1->NULLs


const rotateRight = function(head, k){
    if(!head) return head;

    let p1 = head;
    let p2 = head;

    // let p2 be the fast pointer and will move ahead by k steps  
    for (let i = 0; i < k; i++) {
        if(!p2.next) p2 = head;
        else p2 = p2.next
    }

    // move both pointers so that p2 hits the end 
    while(p2.next){
        p1 = p1.next;
        p2 = p2.next;
    }

    p2.next = head;
    let newHead = p1.next
    p1.next = null
    return newHead
}

