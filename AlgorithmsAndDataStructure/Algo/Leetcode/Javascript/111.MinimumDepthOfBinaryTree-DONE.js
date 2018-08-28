// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its minimum depth = 2.

const minDepth = root => {
    if(!root) return 0
    if(!root.left) return 1+ minDepth(root.right)
    if(!root.right) return 1+ minDepth(root.left)
    return Math.min(1 + minDepth(root.right), 1 + minDepth(root.left))
}
