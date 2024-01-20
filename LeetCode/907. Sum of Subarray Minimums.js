/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  let sum = 0;
  let stack = [];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }

    left[i] = stack.length ? i - stack[stack.length - 1] : i + 1;
    stack.push(i);
  }

  stack = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }

    right[i] = stack.length ? stack[stack.length - 1] - i : arr.length - i;
    stack.push(i);
  }

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * left[i] * right[i];
  }

  return sum % (10 ** 9 + 7);
};

/*
// Brute Force O(n^3)
var sumSubarrayMins = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      sum += Math.min(...arr.slice(i, j));
    }
  }

  return sum % (10 ** 9 + 7);
};
*/

// console.log(sumSubarrayMins([3, 1, 2, 4])); // 17
// console.log(sumSubarrayMins([11, 81, 94, 43, 3])); // 444
