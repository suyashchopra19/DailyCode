// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const addTwoNumbers = (l1,l2) => {
    let ans = new ListNode(0)
    let result = ans
    let sum , carry = 0

    while(l1 || l2 || carry){
        sum = 0
        if(l1){
            sum +=l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }

        sum +=carry

        ans.next = new ListNode(sum % 10)
        carry = Math.floor(sum/10)
        list = list.next
    }
    return result.next
}
