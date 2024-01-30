/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map();

  for (const c of magazine) map.set(c, (map.get(c) || 0) + 1);

  let freq = -1;
  for (const c of ransomNote) {
    freq = map.get(c);
    if (freq > 0) map.set(c, freq - 1);
    else return false;
  }

  return true;
};

// console.log(canConstruct("a", "b")); // false
// console.log(canConstruct("aa", "ab")); // false
// console.log(canConstruct("aa", "aab")); // true
