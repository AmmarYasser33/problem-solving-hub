/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const operators = ["+", "-", "*", "/"];
  const nums = [];

  for (const token of tokens) {
    if (!operators.includes(token)) {
      nums.push(+token);
    } else {
      const x = nums.pop();
      const y = nums.pop();

      switch (token) {
        case "+":
          nums.push(x + y);
          break;
        case "-":
          nums.push(y - x);
          break;
        case "*":
          nums.push(x * y);
          break;
        case "/":
          nums.push(Math.trunc(y / x));
          break;
      }
    }
  }

  return nums[0];
};

// console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
// console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
// console.log(
//   evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
// ); // 22
