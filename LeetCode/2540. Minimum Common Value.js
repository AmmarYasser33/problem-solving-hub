/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  let p1 = 0,
    p2 = 0;

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] < nums2[p2]) {
      p1++;
    } else if (nums1[p1] > nums2[p2]) {
      p2++;
    } else {
      return nums1[p1];
    }
  }

  return -1;
};

// console.log(getCommon([2], [1, 2])); // 2
// console.log(getCommon([1, 2, 3], [2, 4])); // 2
// console.log(getCommon([1, 2], [2, 4])); // 2
// console.log(getCommon([2, 4], [1, 2, 3])); // 2
// console.log(getCommon([1, 2, 3, 6], [2, 3, 4, 5])); // 2
