/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // brute force O(nlogn)
  // return nums.map((num) => num * num).sort((a, b) => a - b);

  // two pointer O(n)
  let n = nums.length;
  let result = new Array(n);
  let left = 0;
  let right = n - 1;
  let index = n - 1;

  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[index] = nums[left] * nums[left];
      left++;
    } else {
      result[index] = nums[right] * nums[right];
      right--;
    }
    index--;
  }

  return result;
};

// console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
// console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4,9,9,49,121]
