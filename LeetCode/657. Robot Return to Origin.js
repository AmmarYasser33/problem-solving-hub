/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  // const map = { U: 0, D: 0, R: 0, L: 0 };
  // for (const c of moves) map[c]++;
  // return map["U"] === map["D"] && map["L"] === map["R"] ? true : false;

  let x = 0,
    y = 0;

  for (const c of moves) {
    switch (c) {
      case "U":
        y++;
        break;
      case "D":
        y--;
        break;
      case "R":
        x++;
        break;
      case "L":
        x--;
        break;
    }
  }

  return x === 0 && y === 0;
};

// console.log(judgeCircle("UD")); // true
// console.log(judgeCircle("LL")); // false
// console.log(judgeCircle("RRDD")); // false
// console.log(judgeCircle("LDRRLRUULR")); // false
