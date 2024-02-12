/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let sol = 0,
    count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      sol = nums[i];
      count++;
    } else if (sol === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  return sol;
};

// console.log(majorityElement([3, 2, 3])); // 3
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
// console.log(majorityElement([1])); // 1
