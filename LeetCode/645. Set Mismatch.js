/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const freq = Array(nums.length + 1).fill(0);

  for (const n of nums) freq[n]++;

  const res = [-1, -1];
  for (let i = 0; i < freq.length; i++) {
    if (freq[i] === 2) res[0] = i;
    else if (freq[i] === 0) res[1] = i;
  }

  return res;
};

// console.log(findErrorNums([1, 2, 2, 4])); // [2,3]
// console.log(findErrorNums([1, 1])); // [1,2]
// console.log(findErrorNums([1, 3, 3])); // [3,2]
// console.log(findErrorNums([3, 2, 2])); // [2,1]
// console.log(findErrorNums([3, 2, 3, 4])); // [3,1]
