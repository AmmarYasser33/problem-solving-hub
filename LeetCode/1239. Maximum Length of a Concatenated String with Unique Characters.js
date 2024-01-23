/**
 * @param {string[]} arr
 * @return {number}
 */

// O(n*m) time
var maxLength = function (arr) {
  let dp = [0];
  let res = 0;

  for (const s of arr) {
    let a = 0,
      dup = 0;

    for (const c of s) {
      dup |= a & (1 << (c.charCodeAt(0) - 97));
      a |= 1 << (c.charCodeAt(0) - 97);
    }

    if (dup > 0) continue;

    for (let i = dp.length - 1; i >= 0; i--) {
      if ((dp[i] & a) > 0) continue;
      dp.push(dp[i] | a);
      res = Math.max(res, popCount(dp[i] | a));
    }
  }

  return res;
};
const popCount = (n) => {
  let count = 0;

  while (n > 0) {
    count++;
    n &= n - 1;
  }

  return count;
};

/*
// O(n^2) time
var maxLength = function (arr) {
  let max = arr[0].length;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      max = Math.max(max, arr[i].length + arr[j].length);
    }
  }

  return max;
};
*/

// console.log(maxLength(["un", "iq", "ue"])); // 4
// console.log(maxLength(["cha", "r", "act", "ers"])); // 6
// console.log(maxLength(["abcdefghijklmnopqrstuvwxyz"])); // 26
