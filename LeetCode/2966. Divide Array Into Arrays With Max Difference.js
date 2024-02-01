/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
  let result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 3) {
    const n1 = nums[i];
    const n2 = nums[i + 1];
    const n3 = nums[i + 2];

    if (n3 - n2 <= k && n3 - n1 <= k && n2 - n1 <= k) {
      result.push([n1, n2, n3]);
    } else return [];
  }

  return result;
};

// console.log(divideArray([1, 3, 4, 8, 7, 9, 3, 5, 1], 2));
// // [[1,1,3],[3,4,5],[7,8,9]]
// console.log(divideArray([1, 3, 3, 2, 7, 3], 3));
// // []
