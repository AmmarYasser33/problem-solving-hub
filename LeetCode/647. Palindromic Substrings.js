/**
 * @param {string} S
 * @return {number}
 */
var countSubstrings = function (S) {
  let length = S.length;
  let count = 0;

  for (let i = 0; i < length; i++) {
    let left = i - 1;
    let right = i;

    // Expand around center for even-length palindromes
    while (right < length - 1 && S[right] === S[right + 1]) {
      right++;
    }

    // Calculate count for substrings with same characters
    count += ((right - left) * (right - left + 1)) / 2;
    i = right++;

    // Expand around center for odd-length palindromes
    while (left >= 0 && right < length && S[right] === S[left]) {
      left--;
      right++;
      count++;
    }
  }

  return count;
};

// console.log(countSubstrings("aaa")); // 6
// console.log(countSubstrings("abc")); // 3
// console.log(countSubstrings("aba")); // 4
