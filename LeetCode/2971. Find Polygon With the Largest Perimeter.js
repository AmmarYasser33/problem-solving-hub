/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  let sum = nums.reduce((pre, curr) => (curr += pre), 0);
  nums.sort((a, b) => b - a);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= sum - nums[i]) sum -= nums[i];
    else return sum;
  }

  return -1;
};

// console.log(largestPerimeter([5, 5, 5])); // 15
// console.log(largestPerimeter([1, 12, 1, 2, 5, 50, 3])); // 12
// console.log(largestPerimeter([5, 5, 50])); // -1
