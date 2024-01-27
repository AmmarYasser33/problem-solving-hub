/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const len = nums.length + 1;
  let result = [];
  let startInd = 0;

  for (let i = 1; i < len; i++) {
    if (nums[i] - nums[startInd] !== i - startInd) {
      if (i - startInd > 1) result.push(`${nums[startInd]}->${nums[i - 1]}`);
      else result.push(`${nums[startInd]}`);

      startInd = i;
    }
  }

  return result;
};

/*
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
// ["0->2","4->5","7"]
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
// ["0","2->4","6","8->9"]
console.log(summaryRanges([]));
// []
console.log(summaryRanges([-1]));
// ["-1"]
console.log(summaryRanges([-2, -1, 1, 2, 2147483646, 2147483647]));
// ["-2->-1","1->2","2147483646->2147483647"]
*/
