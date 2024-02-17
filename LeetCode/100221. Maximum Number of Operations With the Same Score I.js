/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function (nums) {
  let cnt = 1;
  const score = nums[0] + nums[1];

  for (let i = 2; i < nums.length; i += 2) {
    if (nums[i] + nums[i + 1] === score) cnt++;
    else break;
  }

  return cnt;
};

// console.log(maxOperations([3, 2, 1, 4, 5])); // 2
// console.log(maxOperations([3, 2, 6, 1, 4])); // 1
