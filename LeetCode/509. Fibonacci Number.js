// Binet's Fibonacci Formula
// Time: O(1)

var fib = function (n) {
  const phi = (Math.sqrt(5) + 1) / 2;
  return Math.round(Math.pow(phi, n) / Math.sqrt(5));
};

/*
// Time: O(n)
var fib = function (n) {
  if (!n) return n;

  let a = 0,
    b = 1;

  for (let i = 2; i <= n; i++) {
    const curr = a + b;

    a = b;
    b = curr;
  }

  return b;
};
*/
