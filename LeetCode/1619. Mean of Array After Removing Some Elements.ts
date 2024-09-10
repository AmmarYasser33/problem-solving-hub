function trimMean(arr: number[]): number {
  arr.sort((a, b) => a - b);
  const n: number = arr.length;
  const t: number = n * 0.05;
  let sum: number = 0;

  for (let i = t; i < n - t; i++) sum += arr[i];

  return sum / (n - 2 * t);
}

// console.log(
//   trimMean([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3])
// );
// console.log(
//   trimMean([6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0])
// );
// console.log(
//   trimMean([
//     6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4,
//     3, 8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2, 3, 4,
//   ])
// );
