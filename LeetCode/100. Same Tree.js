/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

/*
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const p1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const q1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(isSameTree(p1, q1)); // true

const p2 = new TreeNode(1, new TreeNode(2));
const q2 = new TreeNode(1, null, new TreeNode(2));
console.log(isSameTree(p2, q2)); // false

const p3 = new TreeNode(1, new TreeNode(2), new TreeNode(1));
const q3 = new TreeNode(1, new TreeNode(1), new TreeNode(2));
console.log(isSameTree(p3, q3)); // false
*/
