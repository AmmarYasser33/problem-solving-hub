/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  let onesCount = 0;
  let zeroCount = 0;

  for (const char of s) {
    if (char === "1") {
      onesCount++;
    } else {
      zeroCount++;
    }
  }

  return "1".repeat(onesCount - 1) + "0".repeat(zeroCount) + "1";
};

// console.log(maximumOddBinaryNumber("010")); // 001
// console.log(maximumOddBinaryNumber("0101")); // 1001
// console.log(maximumOddBinaryNumber("10101")); // 11001
