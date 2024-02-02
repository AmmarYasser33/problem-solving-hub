/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  const allNums = [
    12, 23, 34, 45, 56, 67, 78, 89, 123, 234, 345, 456, 567, 678, 789, 1234,
    2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456,
    234567, 345678, 456789, 1234567, 2345678, 3456789, 12345678, 23456789,
    123456789,
  ];

  const result = [];
  const n = allNums.length;

  for (let i = 0; i < n; i++) {
    if (low <= allNums[i] && allNums[i] <= high) result.push(allNums[i]);
  }

  return result;
};

/*
var sequentialDigits = function (low, high) {
  let result = [];

  for (let i = low; i <= high; i++) {
    const num = i + "";

    let isSeq = true;
    for (let j = 0; j < num.length - 1; j++) {
      if (+num[j] + 1 !== +num[j + 1]) {
        isSeq = false;
        break;
      }
    }

    if (isSeq) result.push(i);
  }

  return result;
};
*/

// console.log(sequentialDigits(100, 300)); // [123,234]
// console.log(sequentialDigits(1000, 13000)); // [1234,2345,3456,4567,5678,6789,12345]
// console.log(sequentialDigits(58, 155)); // [67,78,89,123]
