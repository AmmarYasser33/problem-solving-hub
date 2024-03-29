/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n === 0) return false;

  return Math.log2(n) === Math.trunc(Math.log2(n));
};
