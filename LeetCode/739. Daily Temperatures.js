/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  const result = new Array(T.length).fill(0);
  let stack = [];

  for (let i = 0; i < T.length; i++) {
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      const preInd = stack.pop();
      result[preInd] = i - preInd;
    }

    stack.push(i);
  }

  return result;
};

// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// // [1, 1, 4, 2, 1, 1, 0, 0]
// console.log(dailyTemperatures([30, 40, 50, 60])); // [1, 1, 1, 0]
// console.log(dailyTemperatures([30, 60, 90])); // [1, 1, 0]
