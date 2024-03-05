/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  let l = 0;
  let r = s.length - 1;

  while (r > l && s[r] === s[l]) {
    let char = s[r];
    while (s[r] === char && r >= l) r--;
    while (s[l] === char && r >= l) l++;
  }

  return r - l + 1;
};

// console.log(minimumLength("ca")); // 2
// console.log(minimumLength("cabaabac")); // 0
// console.log(minimumLength("aabccabba")); // 3
