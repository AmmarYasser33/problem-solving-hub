/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let max = -1;
  let cnt = 0;
  const freq = Array(101).fill(0);

  for (const n of nums) {
    freq[n]++;
    max = Math.max(max, freq[n]);
  }

  for (const f of freq) {
    if (f === max) cnt++;
  }

  return cnt * max;
};

// console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4])); // 4
// console.log(maxFrequencyElements([1, 2, 3, 4, 5])); // 5
