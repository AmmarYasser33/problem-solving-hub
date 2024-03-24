/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const set = new Set();

  for (const n of nums) {
    if (set.has(n)) return n;

    set.add(n);
  }
};

// console.log(findDuplicate([3, 1, 3, 4, 2])); // 3
// console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
// console.log(findDuplicate([1, 1])); // 1
