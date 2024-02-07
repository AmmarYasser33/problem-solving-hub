/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let result = "";
  const freq = new Map();

  for (const c of s) freq.set(c, (freq.get(c) || 0) + 1);

  const sortedEntries = Array.from(freq.entries()).sort((a, b) => b[1] - a[1]);

  for (const [char, num] of sortedEntries) result += char.repeat(num);

  return result;
};

// console.log(frequencySort("tree")); // eert
// console.log(frequencySort("cccaaa")); // cccaaa
// console.log(frequencySort("Aabb")); // bbAa
