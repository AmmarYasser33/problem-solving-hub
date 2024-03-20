/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const score = [];

  for (const op of operations) {
    switch (op) {
      case "+":
        score.push(score[score.length - 1] + score[score.length - 2]);
        break;
      case "D":
        score.push(score[score.length - 1] * 2);
        break;
      case "C":
        score.pop();
        break;

      default:
        score.push(+op);
        break;
    }
  }

  return score.reduce((pre, curr) => (pre += curr), 0);
};

// console.log(calPoints(["5", "2", "C", "D", "+"])); // 30
// console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])); // 27
// console.log(calPoints(["1", "C"])); // 0
