/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const n = nums.length;

  for (let num of nums) {
    while (num > 0 && num <= n && nums[num - 1] !== num) {
      [nums[num - 1], num] = [num, nums[num - 1]];
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return n + 1;
};

// console.log(firstMissingPositive([1, 2, 0])); // 3
// console.log(firstMissingPositive([3, 4, -1, 1])); // 2
// console.log(firstMissingPositive([1])); // 2
// console.log(firstMissingPositive([7, 8, 9, 11, 12])); // 1
// console.log(firstMissingPositive([-1, -2])); // 1
