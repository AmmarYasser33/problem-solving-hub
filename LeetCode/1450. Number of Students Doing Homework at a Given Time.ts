function busyStudent(
  startTime: number[],
  endTime: number[],
  queryTime: number
): number {
  // Solution 1
  // const pre: number[] = new Array(1005).fill(0);

  // for (let i = 0; i < endTime.length; i++) {
  //   pre[startTime[i]] += 1;
  //   pre[endTime[i] + 1] -= 1;
  // }

  // for (let i = 1; i < 1004; i++) pre[i] += pre[i - 1];

  // return pre[queryTime];

  // Solution 2
  return startTime.filter((t, i) => queryTime >= t && queryTime <= endTime[i])
    .length;
}

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4)); // 1
console.log(busyStudent([4], [4], 4)); // 1
