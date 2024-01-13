/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  let changes = 0;
  const len = t.length;

  const sFreq = Array(26).fill(0);
  const tFreq = Array(26).fill(0);

  for (let i = 0; i < len; i++) {
    sFreq[s[i].charCodeAt(0) - 97]++;
    tFreq[t[i].charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < 26; i++) {
    changes += Math.abs(sFreq[i] - tFreq[i]);
  }

  return Math.floor(changes / 2);
};

// console.log(minSteps("bab", "aba")); // 1
// console.log(minSteps("leetcode", "practice")); // 5
// console.log(minSteps("anagram", "mangaar")); // 0
