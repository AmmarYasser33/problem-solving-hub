/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const len = s.length;
  const hLen = s.length / 2;
  let lv = 0;
  let rv = 0;
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  for (let i = 0; i < hLen; i++) {
    if (vowels.includes(s[i])) lv++;
  }
  for (let i = hLen; i < len; i++) {
    if (vowels.includes(s[i])) rv++;
  }

  return lv === rv;
};

// console.log(halvesAreAlike("book")); // true
// console.log(halvesAreAlike("textbook")); // false
// console.log(halvesAreAlike("ezihtoma")); // true
