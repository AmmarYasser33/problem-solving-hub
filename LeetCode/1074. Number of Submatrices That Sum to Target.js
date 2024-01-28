/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function (matrix, target) {
  const R = matrix.length;
  const C = matrix[0].length;
  let count = 0;

  // Calculate prefix sum for each row
  for (let i = 0; i < R; i++) {
    for (let j = 1; j < C; j++) {
      matrix[i][j] += matrix[i][j - 1];
    }
  }

  // Iterate over all possible pairs of columns (j, k)
  for (let j = 0; j < C; j++) {
    for (let k = j; k < C; k++) {
      const prefixSumMap = new Map();
      prefixSumMap.set(0, 1);

      let currentSum = 0;

      // Iterate over all rows to calculate the cumulative sum for the current submatrix
      for (let i = 0; i < R; i++) {
        currentSum += matrix[i][k] - (j > 0 ? matrix[i][j - 1] : 0);
        count += prefixSumMap.get(currentSum - target) || 0;
        prefixSumMap.set(currentSum, (prefixSumMap.get(currentSum) || 0) + 1);
      }
    }
  }

  return count;

  /*
  // First sol
  let r = matrix.length,
    c = matrix[0].length;

  // Compute 2D prefix sum
  let ps = Array.from({ length: r + 1 }, () => new Array(c + 1).fill(0));
  for (let i = 1; i < r + 1; ++i) {
    for (let j = 1; j < c + 1; ++j) {
      ps[i][j] =
        ps[i - 1][j] + ps[i][j - 1] - ps[i - 1][j - 1] + matrix[i - 1][j - 1];
    }
  }

  let count = 0;
  let currSum;
  let h = new Map();

  // Reduce 2D problem to 1D one by fixing two columns c1 and c2
  for (let c1 = 1; c1 < c + 1; ++c1) {
    for (let c2 = c1; c2 < c + 1; ++c2) {
      h.clear();
      h.set(0, 1);
      for (let row = 1; row < r + 1; ++row) {
        // Current 1D prefix sum
        currSum = ps[row][c2] - ps[row][c1 - 1];

        // Add subarrays which sum up to (currSum - target)
        count += h.get(currSum - target) || 0;

        // Save current prefix sum
        h.set(currSum, (h.get(currSum) || 0) + 1);
      }
    }
  }

  return count;
  */
};

/*
console.log(
  numSubmatrixSumTarget(
    [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
    0
  )
); // 4

console.log(
  numSubmatrixSumTarget(
    [
      [1, -1],
      [-1, 1],
    ],
    0
  )
); // 5

console.log(numSubmatrixSumTarget([[904]], 0)); // 0
*/
