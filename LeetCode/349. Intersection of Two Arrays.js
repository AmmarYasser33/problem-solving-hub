/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set = new Set(nums1);
  let result = [];

  for (const n of set) {
    if (nums2.includes(n)) {
      result.push(n);
    }
  }

  return result;

  /*
  const freq1 = new Map();
  const freq2 = new Map();

  for (const n of nums1) freq1.set(n, 1);
  for (const n of nums2) freq2.set(n, 1);

  let result = [];
  for (const [n, f] of freq2) {
    if (freq1.has(n)) result.push(n);
  }

  return result;
*/
};

// console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [9,4]
