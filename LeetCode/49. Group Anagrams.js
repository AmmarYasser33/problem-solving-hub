/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (const str of strs) {
    const sorted = str.split("").sort().join("");

    if (map.has(sorted)) {
      map.get(sorted).push(str);
    } else {
      map.set(sorted, [str]);
    }
  }

  return Array.from(map.values());
};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// // [["bat"],["nat","tan"],["ate","eat","tea"]]
// console.log(groupAnagrams([""])); // [[""]]
// console.log(groupAnagrams(["a"])); // [["a"]]
