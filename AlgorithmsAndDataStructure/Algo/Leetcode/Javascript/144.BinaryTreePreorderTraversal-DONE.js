// Given a binary tree, return the preorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [1,2,3]

const preorderTraversal = (root, array =[]) => {
    if(!root) return array
    result.push(root.val)
    preorderTraversal(root.left, array)
    preorderTraversal(root.right, array)
    return array
}