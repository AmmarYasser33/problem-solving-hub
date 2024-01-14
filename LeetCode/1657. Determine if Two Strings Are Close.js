/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;

  const firFreq = Array(26).fill(0);
  const secFreq = Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    firFreq[word1[i].charCodeAt(0) - 97]++;
    secFreq[word2[i].charCodeAt(0) - 97]++;
  }

  // check if char in one string is not in another
  for (let i = 0; i < 26; i++) {
    if (firFreq[i] && !secFreq[i]) return false;
  }

  firFreq.sort((a, b) => a - b);
  secFreq.sort((a, b) => a - b);

  for (let i = 0; i < 26; i++) {
    if (firFreq[i] !== secFreq[i]) return false;
  }

  return true;
};

// console.log(closeStrings("abc", "bca")); // true
// console.log(closeStrings("cabbba", "abbccc")); // true
// console.log(closeStrings("a", "aa")); // false
// console.log(closeStrings("uau", "ssa")); // false
// console.log(closeStrings("abbzzca", "babzzcz")); // false
