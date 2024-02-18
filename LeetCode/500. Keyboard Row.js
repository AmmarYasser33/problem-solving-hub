/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const R1 = "qwertyuiop",
    R2 = "asdfghjkl",
    R3 = "zxcvbnm";

  const result = [];

  for (const word of words) {
    let inR1 = true,
      inR2 = true,
      inR3 = true;

    for (const c of word) {
      if (!R1.includes(c.toLowerCase())) inR1 = false;
    }
    for (const c of word) {
      if (!R2.includes(c.toLowerCase())) inR2 = false;
    }
    for (const c of word) {
      if (!R3.includes(c.toLowerCase())) inR3 = false;
    }

    if (inR1 || inR2 || inR3) result.push(word);
  }

  return result;
};

// console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])); // ["Alaska", "Dad"]
// console.log(findWords(["omk"])); // []
