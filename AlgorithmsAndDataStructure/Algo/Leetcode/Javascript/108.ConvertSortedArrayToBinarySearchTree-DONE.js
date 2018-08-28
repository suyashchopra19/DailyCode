// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

const TreeNode = val => {
    this.val = val;
    this.left = this.right = null
}

const sortedArrayToBST = array => {
    if(!array.length) return [];
    return helper(array, 0, array.length-1)
}

const helper = (array, start, end)=> {
    if(start > end) return null;
    let mid = Math.floor((start+end) / 2)
    let currentNode = new TreeNode(array[mid])
    currentNode.left = helper(array, start, mid-1)
    currentNode.right = helper(array, mid+1, end)
    return currentNode;
}