/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function (root) {
  return traverse(root, root.val, root.val);

  function traverse(node, min, max) {
    if (!node) {
      return max - min;
    }

    min = Math.min(min, node.val);
    max = Math.max(max, node.val);

    const leftDiff = traverse(node.left, min, max);
    const rightDiff = traverse(node.right, min, max);

    return Math.max(leftDiff, rightDiff);
  }
};

/*
var maxAncestorDiff = function (root) {
  let minR = root.val;
  let minL = root.val;
  let maxR = root.val;
  let maxL = root.val;

  function traverseL(rt, arr = []) {
    if (!rt) return [];

    minL = Math.min(minL, rt.val);
    maxL = Math.max(maxL, rt.val);

    arr.push(rt.val);
    traverseL(rt.left, arr);
    traverseL(rt.right, arr);

    return arr;
  }
  traverseL(root.left);

  function traverseR(rt, arr = []) {
    if (!rt) return [];

    minR = Math.min(minR, rt.val);
    maxR = Math.max(maxR, rt.val);

    arr.push(rt.val);
    traverseR(rt.left, arr);
    traverseR(rt.right, arr);

    return arr;
  }
  traverseR(root.right);

  const val1 = maxR - minR;
  const val2 = maxL - minL;

  return val1 > val2 ? val1 : val2;
};
*/

// [8,3,10,1,6,null,14,null,null,4,7,13] => 7

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(8);
root.left = new TreeNode(3);
root.right = new TreeNode(10);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(6);
root.right.right = new TreeNode(14);
root.left.right.left = new TreeNode(4);
root.left.right.right = new TreeNode(7);
root.right.right.left = new TreeNode(13);

console.log(maxAncestorDiff(root));
