/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 2) return 1;

  let curr = 1,
    prev = 1;

  for (let i = 2; i <= n; i++) {
    const temp = curr;
    curr += prev;
    prev = temp;
  }

  return curr;
};

// console.log(climbStairs(2)); // 2
// console.log(climbStairs(3)); // 3
// console.log(climbStairs(4)); // 5
// console.log(climbStairs(5)); // 8
// console.log(climbStairs(6)); // 13
