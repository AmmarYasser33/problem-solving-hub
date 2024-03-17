/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let [newStart, newEnd] = newInterval;
  const left = [];
  const right = [];

  for (const interval of intervals) {
    const [start, end] = interval;

    if (end < newStart) left.push(interval);
    else if (start > newEnd) right.push(interval);
    else {
      newStart = Math.min(newStart, start);
      newEnd = Math.max(newEnd, end);
    }
  }

  return [...left, [newStart, newEnd], ...right];
};

// console.log(
//   insert(
//     [
//       [1, 3],
//       [6, 9],
//     ],
//     [2, 5]
//   )
// ); // [[1,5],[6,9]]
// console.log(
//   insert(
//     [
//       [1, 2],
//       [3, 5],
//       [6, 7],
//       [8, 10],
//       [12, 16],
//     ],
//     [4, 8]
//   )
// ); // [[1,2],[3,10],[12,16]]
