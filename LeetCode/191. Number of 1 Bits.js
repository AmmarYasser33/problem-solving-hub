/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  binNum = n.toString(2);
  let ones = 0;

  for (let i = 0; i < binNum.length; i++) {
    if (binNum[i] === "1") ones++;
  }

  return ones;
};

// console.log(hammingWeight(11)); // 3
