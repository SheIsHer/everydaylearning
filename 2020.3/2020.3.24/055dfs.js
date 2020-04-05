
let isans
var isBalanced = function(root) {
    isans = true
    dfs(root)
    return isans
};

var dfs = function(root){
    if(!root) return 0
    let left = dfs(root.left),
        right = dfs(root.right)
    if(Math.abs(left - right) > 1) isans = false
    return Math.max(left, right) + 1
}
