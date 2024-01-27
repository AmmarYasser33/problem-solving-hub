/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function (n, k) {
  let M = 1000000007;
  let dp = Array.from({ length: 1001 }, () => new Uint32Array(1001));

  dp[0][0] = 1;

  for (let i = 1; i <= 1000; ++i) {
    dp[i][0] = 1;
    let bound = Math.min(1000, (i * (i - 1)) >> 1);

    for (let j = 1; j <= bound; ++j) {
      dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % M;
      if (j >= i) dp[i][j] = (dp[i][j] - dp[i - 1][j - i] + M) % M;
    }
  }

  return dp[n][k];
};

/*
var kInversePairs = function (n, k) {
  const M = 1000000007;
  let dp = new Array(1001).fill(0).map(() => new Array(1001).fill(0));
  dp[0][0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= k; j++) {
      for (let x = 0; x <= Math.min(j, i - 1); x++) {
        if (j - x >= 0) {
          dp[i][j] = (dp[i][j] + dp[i - 1][j - x]) % M;
        }
      }
    }
  }

  return dp[n][k];
};
*/

// console.log(kInversePairs(3, 0)); // 1
// console.log(kInversePairs(3, 1)); // 2
