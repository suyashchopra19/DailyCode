// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

// Note: 
// You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

// Example 1:

// Input: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// Output: 1
// Example 2:

// Input: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// Output: 3

var kthSmallest = function (root, k) {
    let res = helper(root)
    return res[k-1]
};

function helper(root, arr=[]){
    if(!root) return arr;
    helper(root.left, arr)
    arr.push(root.val)
    helper(root.right,arr)
    return arr
}