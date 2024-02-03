/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums) {
  const [a, b, c] = nums.sort((a, b) => a - b);
  if (a + b <= c) return "none";
  if (a === b && b === c) return "equilateral";
  if (a === b || b === c) return "isosceles";
  return "scalene";
};

// console.log(triangleType([2, 2, 2])); // "equilateral"
// console.log(triangleType([3, 4, 5])); // "scalene"
