/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  let cnt = 0;
  let freq = new Map();

  for (let num of arr) freq.set(num, (freq.get(num) || 0) + 1);

  let v = Array.from(freq.values()).sort((a, b) => a - b);

  for (let i = 0; i < v.length; i++) {
    if (k > v[i]) {
      k -= v[i];
      v[i] = 0;
    } else {
      v[i] -= k;
      k = 0;
    }

    if (v[i] !== 0) cnt++;
  }

  return cnt;
};

// console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3)); // 2
// console.log(findLeastNumOfUniqueInts([5, 5, 4], 1)); // 1
