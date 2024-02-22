
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const freq = new Array(n + 1).fill(0);

  for (const [fir, sec] of trust) {
    freq[fir]--;
    freq[sec]++;
  }

  for (let i = 1; i < freq.length; i++) {
    if (freq[i] === n - 1) return i;
  }

  return -1;
};

// console.log(findJudge(2, [[1, 2]])); // 2
// console.log(findJudge(3, [[1, 3], [2, 3]])); // 3
// console.log(findJudge(3, [[1, 3], [2, 3], [3, 1]])); // -1
// console.log(findJudge(3, [1,2],[2,3])); // -1
