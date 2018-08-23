function TreeNode(val){
    this.val = val
    this.left = this.right = null
}

const insertIntoBST = (root,val) => {
    if(val < this.root){
        if(!root.left) root.left = new TreeNode(val)
        else insertIntoBST(root.left, val)
    }else {
        if(!root.right) root.right = new TreeNode(val)
        else insertIntoBST(root.right, val)
    }
    return root
}