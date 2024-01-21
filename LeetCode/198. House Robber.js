/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // prevMax, currMax, num

  let currMax = 0,
    prevMax = 0;

  for (const num of nums) {
    const temp = currMax;
    currMax = Math.max(currMax, prevMax + num);
    prevMax = temp;
  }

  return currMax;
};

// console.log(rob([1, 2, 3, 1])); // 4
// console.log(rob([1, 2, 3, 4])); // 6
// console.log(rob([2, 7, 9, 3, 1])); // 12
// console.log(rob([2, 7, 9, 3, 1, 4])); // 15
