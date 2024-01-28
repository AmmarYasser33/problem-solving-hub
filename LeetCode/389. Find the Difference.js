/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let sum = t[len].charCodeAt(0);
  const len = s.length;

  for (let i = 0; i < len; i++) {
    sum += t[i].charCodeAt(0) - s[i].charCodeAt(0);
  }

  return String.fromCharCode(sum);
};

// console.log(findTheDifference("abcd", "abcde")); // e
// console.log(findTheDifference("", "y")); // y
// console.log(findTheDifference("a", "aa")); // a
