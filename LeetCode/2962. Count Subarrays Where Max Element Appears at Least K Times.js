/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  const n = nums.length;
  const maxNum = Math.max(...nums);

  let ans = 0,
    cnt = 0,
    r = 0,
    l = 0;

  while (r < n) {
    if (maxNum === nums[r]) cnt++;
    r++;

    while (cnt >= k) {
      if (maxNum === nums[l]) cnt--;
      l++;
    }

    ans += l;
  }

  return ans;
};

// console.log(countSubarrays([1, 3, 2, 3, 3], 2)); // 6
// console.log(countSubarrays([1, 4, 2, 1], 3)); // 0
