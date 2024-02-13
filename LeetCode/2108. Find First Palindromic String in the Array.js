/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (const word of words) {
    if (isPalind(word)) return word;
  }

  return "";
};

function isPalind(s) {
  let right = s.length - 1;
  let left = 0;

  while (right > left) {
    if (s[right] !== s[left]) return false;

    right--;
    left++;
  }

  return true;
}

// console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"])); // "ada"
// console.log(firstPalindrome(["notapalindrome", "racecar"])); // "racecar"
// console.log(firstPalindrome(["def", "ghi"])); // ""
