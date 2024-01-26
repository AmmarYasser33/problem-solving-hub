/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;

  const maxLeft = maxDepth(root.left);
  const maxRight = maxDepth(root.right);

  return Math.max(maxLeft, maxRight) + 1;
};

/*
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// [3,9,20,null,null,15,7]
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));
console.log(maxDepth(root)); // 3

// [1,null,2]
const root2 = new TreeNode(1, null, new TreeNode(2));
console.log(maxDepth(root2)); // 2
*/
