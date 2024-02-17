/**
 * @param {string} s
 * @return {string}
 */
var lastNonEmptyString = function (s) {
  let result = "";
  const freq = new Array(26).fill(0);

  for (const c of s) freq[c.charCodeAt(0) - 97]++;
  const max = Math.max(...freq);

  for (let i = s.length - 1; i >= 0; i--) {
    if (freq[s[i].charCodeAt(0) - 97] === max) {
      result = s[i] + result;
      freq[s[i].charCodeAt(0) - 97] = -1;
    }
  }

  return result;
};

// console.log(lastNonEmptyString("aabcbbca")); // ba
// console.log(lastNonEmptyString("abcd")); // abcd
