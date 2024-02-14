/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  const result = [];
  let posInd = 0;
  let negInd = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result[posInd] = nums[i];
      posInd += 2;
    } else {
      result[negInd] = nums[i];
      negInd += 2;
    }
  }

  return result;
};

// console.log(rearrangeArray([3, 1, -2, -5, 2, -4])); // [3,-2,1,-5,2,-4]
// console.log(rearrangeArray([-1, 1])); // [1,-1]
