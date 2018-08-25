// Given a binary tree, return the inorder traversal of its nodes' values.

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;    
}

const inorderTraversal = (root, array = []) => {
    if (!root) return array
    inorderTraversal(root.left, array)
    array.push(root.val)
    inorderTraversal(root.right, array)
    return array
}
