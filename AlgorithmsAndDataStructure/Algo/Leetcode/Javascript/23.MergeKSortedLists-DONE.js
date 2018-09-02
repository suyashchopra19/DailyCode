// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

// Example:

// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// Output: 1->1->2->3->4->4->5->6

var mergeKLists = function (lists, low = 0, high = lists.length - 1) {
    if (lists.length === 0) {
        return lists;
    }

    if (low === high) {
        return lists[low];
    }

    const mid = Math.floor((high + low) / 2);
    const left = mergeKLists(lists, low, mid);
    const right = mergeKLists(lists, mid + 1, high);

    return mergeTwoLists(left, right);

};

function mergeTwoLists(l1,l2){
    if(!l1) return l2
    if(!l2) return l1
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next= mergeTwoLists(l1,l2.next)
        return l2
    }
}
