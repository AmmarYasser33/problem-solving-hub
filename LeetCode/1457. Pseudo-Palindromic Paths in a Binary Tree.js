/**
 * @param {TreeNode} root
 * @return {number}
 */
const pseudoPalindromicPaths = (root) => {
  let count = 0;

  const traverseTree = (node, xorPath, oddCount, digitCount) => {
    xorPath ^= 1; // Toggle the least significant bit
    oddCount += ++digitCount[node.val] & 1 ? 1 : -1;

    //  leaf node and path is pseudo-palindromic
    if (!node.left && !node.right) {
      if (oddCount <= xorPath) {
        count += 1;
      }
    }

    if (node.left) {
      traverseTree(node.left, xorPath, oddCount, digitCount);
    }
    if (node.right) {
      traverseTree(node.right, xorPath, oddCount, digitCount);
    }

    // Backtrack: Decrement the count for the current digit
    --digitCount[node.val];
  };

  traverseTree(root, 0, 0, Array(10).fill(0));

  return count;
};

/*
var pseudoPalindromicPaths = function (root) {
  let count = 0;
  let stack = [[root, 0]];

  while (stack.length > 0) {
    let [node, path] = stack.pop();

    if (node !== null) {
      // XOR to toggle the bit of the node.val in the path if the bit is already set, it will be unset and vice versa
      // EX: path = 0000, node.val = 1, path = 0001
      // EX: path = 0001, node.val = 1, path = 0000
      // EX: path = 0001, node.val = 2, path = 0011
      // EX: path = 0011, node.val = 2, path = 0001

      path = path ^ (1 << node.val);

      if (node.left === null && node.right === null) {
        if ((path & (path - 1)) === 0) {
          count += 1;
        }
      } else {
        stack.push([node.right, path]);
        stack.push([node.left, path]);
      }
    }
  }

  return count;
};
*/

/*
// [2,3,1,3,1,null,1]

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(
  2,
  new TreeNode(3, new TreeNode(3), new TreeNode(1)),
  new TreeNode(1, null, new TreeNode(1))
);

console.log(pseudoPalindromicPaths(root)); // 2

// [2,1,1,1,3,null,null,null,null,null,1]

const root2 = new TreeNode(
  2,
  new TreeNode(1, new TreeNode(1, new TreeNode(1, null, new TreeNode(1)))),
  new TreeNode(3)
);

console.log(pseudoPalindromicPaths(root2)); // 1

// [9]

const root3 = new TreeNode(9);

console.log(pseudoPalindromicPaths(root3)); // 1
*/
