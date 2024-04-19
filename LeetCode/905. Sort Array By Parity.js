/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const result = [];

  for (const n of nums) {
    if (n % 2 === 0) result.unshift(n);
    else result.push(n);
  }

  return result;
};

// console.log(sortArrayByParity([3, 1, 2, 4])); // [2,4,3,1]
// console.log(sortArrayByParity([0])); // [0]
