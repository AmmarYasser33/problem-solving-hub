/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  let x = Math.sqrt((n * (n + 1)) / 2);

  if (Math.floor(x) === x) return x;

  return -1;

  // for (let x = 1; x <= n; x++) {
  //   const sum1 = (x * (x + 1)) / 2;
  //   const sum2 = (n * (n + 1)) / 2 - sum1 + x;
  //   if (sum1 === sum2) return x;
  // }
  // return -1;
};

// console.log(pivotInteger(8)); // 6
// console.log(pivotInteger(1)); // 1
// console.log(pivotInteger(4)); // -1
