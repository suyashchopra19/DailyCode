// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// But the following [1,2,2,null,3,null,3] is not:
//     1
//    / \
//   2   2
//    \   \
//    3    3

const isSymmetric = root => {
    if (root) return helper(root.left, root.right)
    else return true
}

const helper = (p, q) => {
    if (!p || !q) return p === q
    return helper(p.left, q.right) && helper(p.right, q.left) && p.val === q.val
}