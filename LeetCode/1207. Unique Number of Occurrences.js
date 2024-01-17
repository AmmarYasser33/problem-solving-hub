/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const map = new Map();

  for (const n of arr) {
    if (map.has(n)) map.set(n, map.get(n) + 1);
    else map.set(n, 1);
  }

  const set = new Set(map.values());
  return map.size === set.size;
};

// console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
// console.log(uniqueOccurrences([1, 2])); // false
// console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // true
