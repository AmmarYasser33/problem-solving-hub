/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (tokens, power) {
  let score = 0;
  let maxScore = 0;
  tokens.sort((a, b) => a - b);

  let l = 0;
  let r = tokens.length - 1;

  while (r >= l) {
    if (tokens[l] <= power) {
      power -= tokens[l];
      score++;
      maxScore = Math.max(maxScore, score);
      l++;
    } else if (score > 0) {
      power += tokens[r];
      score--;
      r--;
    } else {
      break;
    }
  }

  return maxScore;
};

// console.log(bagOfTokensScore([100], 50)); // 0
// console.log(bagOfTokensScore([200, 100], 150)); // 1
// console.log(bagOfTokensScore([100, 200, 300, 400], 200)); // 2
