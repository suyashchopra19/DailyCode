// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

const maxDepth = root => {
    if(!root) return 0;
    if(!root. left) return 1+ maxDepth(root.right)
    if(!root. right) return 1+ maxDepth(root.left)
    return Math.max(1+ maxDepth(root.right), 1+ maxDepth(root.left))
}