/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  const losses = Array(100001).fill(0);

  const winners = [];
  const losers = [];

  for (const [w, l] of matches) {
    if (losses[w] === 0) losses[w] = -1;

    if (losses[l] === -1) {
      losses[l] = 1;
    } else {
      losses[l]++;
    }
  }

  for (let i = 1; i < 100001; i++) {
    if (losses[i] === -1) winners.push(i);
    else if (losses[i] === 1) losers.push(i);
  }

  return [winners, losers];
};

// var findWinners = function (matches) {
//   const len = matches.length;
//   const w = Array(100001).fill(0);
//   const l = Array(100001).fill(0);

// const winners = [];
// const losers = [];

//   for (let i = 0; i < len; i++) {
//     w[matches[i][0]]++;
//     l[matches[i][1]]++;
//   }

//   for (let i = 1; i < 100001; i++) {
//     if (w[i] >= 1 && l[i] === 0) winners.push(i);
//     if (l[i] === 1) losers.push(i);
//   }

//   return [winners, losers];
// };

/*
// Test Cases

console.log(
  findWinners([
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9],
  ])
); // [[1,2,10],[4,5,7,8]]
console.log(
  findWinners([
    [2, 3],
    [1, 3],
    [5, 4],
    [6, 4],
  ])
); // [[1,2,5,6],[]]
*/
