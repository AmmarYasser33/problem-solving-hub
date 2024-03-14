/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let count = new Map();
  count.set(0, 1);
  let currSum = 0;
  let totalSubarrays = 0;

  for (let num of nums) {
    currSum += num;
    if (count.has(currSum - goal)) {
      totalSubarrays += count.get(currSum - goal);
    }
    count.set(currSum, (count.get(currSum) || 0) + 1);
  }

  return totalSubarrays;
};

// console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2)); // 4
// console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0)); // 15
