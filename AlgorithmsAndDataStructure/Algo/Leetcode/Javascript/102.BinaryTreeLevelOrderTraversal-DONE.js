// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]


const levelOrder = root => {
    return helper(root)
}

const helper = (node,index =0, result=[]) => {
    if(node){
        result[index] = result[index] || []
        // if result = [[3]] we need to add [] to make result = [[3],[]]
        result[index].push(node.val)

        helper(node.left, index+1, result)
        helper(node.right, index+1, result)
    }
    return result;
}