/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// O(m * n)
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;

  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
};

/*
// O(n^2)
// my solution
// ! not working (should consecutive!)
var longestCommonSubsequence = function (text1, text2) {
  let cnt = 0;
  let result = 0;
  let lastInd = 0;

  for (let i = 0; i < text2.length; i++) {
    let ind = text1.indexOf(text2[i], lastInd);

    if (ind !== -1) {
      cnt++;
      lastInd = ind;
    } else {
      result = Math.max(result, cnt);
      cnt = 0;
      lastInd = 0;
    }

    // lastInd = ind;
  }

  result = Math.max(result, cnt);

  return result;
};
*/

// console.log(longestCommonSubsequence("abc", "def")); // 0
// console.log(longestCommonSubsequence("abcde", "eca")); // 1
// console.log(longestCommonSubsequence("eca", "abcde")); // 1
// console.log(longestCommonSubsequence("ezupkr", "ubmrapg")); // 2
// console.log(longestCommonSubsequence("ubmrapg", "ezupkr")); // 2
// console.log(longestCommonSubsequence("abc", "abc")); // 3
// console.log(longestCommonSubsequence("abcde", "ace")); // 3
