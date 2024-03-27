/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;

  let r = 0,
    l = 0,
    cnt = 0,
    product = 1;

  while (r < nums.length) {
    product *= nums[r];
    while (product >= k) product /= nums[l++];
    cnt += 1 + (r - l);
    r++;
  }

  return cnt;
};

// console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100)); // 8
// console.log(numSubarrayProductLessThanK([1, 2, 3], 0)); // 0
