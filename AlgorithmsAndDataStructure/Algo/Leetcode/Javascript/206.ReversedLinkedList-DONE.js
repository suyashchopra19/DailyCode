// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// // Output: 5->4->3->2->1->NULL

var reverseList = function (head) {
    let prev = null,
        next = head;

    while (head) {
        let tmp = head.next;

        head.next = prev;
        prev = head;
        head = tmp;
    }

    return prev;
};

//https://www.youtube.com/watch?v=4mm39dVLlZ0
function reverseList(head) {
    if (!head || !head.next) {
        return head;
    }
    var newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}
