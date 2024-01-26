/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
  // Initialize a 3D array to store memoized results
  const memo = Array(m + 1)
    .fill(-1)
    .map(() =>
      Array(n + 1)
        .fill(-1)
        .map(() => Array(maxMove + 1).fill(-1))
    );

  // Define a constant for modulo operation
  const mod = 1e9 + 7;

  // Define the DFS function to explore paths
  const dfs = (i, j, move) => {
    // Base case: if out of bounds, return 1 (out of boundary)
    if (i < 0 || j < 0 || j >= n || i >= m) return 1;

    // Base case: if no moves left, return 0 (cannot move further)
    if (move === 0) return 0;

    // Check if result for the current state is already memoized
    if (memo[i][j][move] !== -1) return memo[i][j][move];

    // Recursive calls for four possible moves
    const down = dfs(i + 1, j, move - 1) % mod;
    const up = dfs(i - 1, j, move - 1) % mod;
    const right = dfs(i, j + 1, move - 1) % mod;
    const left = dfs(i, j - 1, move - 1) % mod;

    // Memoize and return the result for the current state
    return (memo[i][j][move] =
      (((down + up) % mod) + ((right + left) % mod)) % mod);
  };

  // Start DFS from the given initial position with maxMove
  return dfs(startRow, startColumn, maxMove);
};

/*
var findPaths = function (m, n, maxMove, startRow, startColumn) {
  const M = 1000000000 + 7;
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  dp[startRow][startColumn] = 1;
  let count = 0;

  for (let moves = 1; moves <= maxMove; moves++) {
    let temp = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (i === m - 1) count = (count + dp[i][j]) % M;
        if (j === n - 1) count = (count + dp[i][j]) % M;
        if (i === 0) count = (count + dp[i][j]) % M;
        if (j === 0) count = (count + dp[i][j]) % M;
        temp[i][j] =
          ((((i > 0 ? dp[i - 1][j] : 0) + (i < m - 1 ? dp[i + 1][j] : 0)) % M) +
            (((j > 0 ? dp[i][j - 1] : 0) + (j < n - 1 ? dp[i][j + 1] : 0)) %
              M)) %
          M;
      }
    }
    dp = temp;
  }

  return count;
};
*/

// console.log(findPaths(2, 2, 2, 0, 0)); // 6
// console.log(findPaths(1, 3, 3, 0, 1)); // 12
