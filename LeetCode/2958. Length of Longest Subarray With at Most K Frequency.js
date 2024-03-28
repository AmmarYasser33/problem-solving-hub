/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
  const freq = new Map();
  const n = nums.length;
  let l = 0,
    r = 0,
    cnt = 0;

  while (r < n) {
    freq.set(nums[r], (freq.get(nums[r]) || 0) + 1);

    while (freq.get(nums[r]) > k) freq.set(nums[l], freq.get(nums[l++]) - 1);

    cnt = Math.max(cnt, r - l + 1);

    r++;
  }

  return cnt;
};

// console.log(maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2)); // 6
// console.log(maxSubarrayLength([5, 5, 5, 5, 5, 5, 5], 4)); // 4
// console.log(maxSubarrayLength([1, 2, 1, 2, 1, 2, 1, 2], 1)); // 2
