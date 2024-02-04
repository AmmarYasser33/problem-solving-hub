/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

var minWindow = function (s, t) {
  const charCount = {};
  let requiredChars = 0;
  let left = 0;
  let minWindowSize = Infinity;
  let minWindowStart = 0;

  // Count the characters in string t
  for (const char of t) {
    charCount[char] = (charCount[char] || 0) + 1;
    requiredChars++;
  }

  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right];

    // Check if the current character is required
    if (charCount[rightChar] > 0) {
      requiredChars--;
    }

    // Decrease the count of the current character in the window
    charCount[rightChar] = (charCount[rightChar] || 0) - 1;

    // Check if all required characters are present in the window
    while (requiredChars === 0) {
      // Update the minimum window size and starting index
      if (right - left + 1 < minWindowSize) {
        minWindowSize = right - left + 1;
        minWindowStart = left;
      }

      // Move the left pointer to shrink the window
      const leftChar = s[left];
      charCount[leftChar]++;
      if (charCount[leftChar] > 0) {
        requiredChars++;
      }

      left++;
    }
  }

  return minWindowSize === Infinity
    ? ""
    : s.substr(minWindowStart, minWindowSize);
};

/*
// Another solution
var minWindow = function (s, t) {
  if (!s || !t) {
    return "";
  }

  let dictT = new Map();
  for (let c of t) {
    dictT.set(c, (dictT.get(c) || 0) + 1);
  }

  let required = dictT.size;
  let l = 0,
    r = 0;
  let formed = 0;

  let windowCounts = new Map();
  let ans = [-1, 0, 0];

  while (r < s.length) {
    let c = s.charAt(r);
    windowCounts.set(c, (windowCounts.get(c) || 0) + 1);

    if (dictT.has(c) && windowCounts.get(c) === dictT.get(c)) {
      formed++;
    }

    while (l <= r && formed === required) {
      c = s.charAt(l);

      if (ans[0] === -1 || r - l + 1 < ans[0]) {
        ans[0] = r - l + 1;
        ans[1] = l;
        ans[2] = r;
      }

      windowCounts.set(c, windowCounts.get(c) - 1);
      if (dictT.has(c) && windowCounts.get(c) < dictT.get(c)) {
        formed--;
      }

      l++;
    }

    r++;
  }

  return ans[0] === -1 ? "" : s.substring(ans[1], ans[2] + 1);
};
*/

// console.log(minWindow("ADOBECODEBANC", "ABC")); // BANC
// console.log(minWindow("a", "a")); // a
// console.log(minWindow("a", "aa")); // ""
