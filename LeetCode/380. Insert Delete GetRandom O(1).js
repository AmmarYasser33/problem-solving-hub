var RandomizedSet = function () {
  this.map = new Map();
  this.list = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false;

  this.map.set(val, this.list.length);
  this.list.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false;

  const ind = this.map.get(val);
  const lastVal = this.list[this.list.length - 1];

  this.list[ind] = lastVal;
  this.map.set(lastVal, ind);

  this.list.pop();
  this.map.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randInd = Math.floor(Math.random() * this.list.length);
  return this.list[randInd];
};

/*
const randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1)); // true
console.log(randomizedSet.remove(2)); // false
console.log(randomizedSet.insert(2), randomizedSet.list); // true [1,2]
console.log(randomizedSet.getRandom()); // 1 or 2 randomly.
console.log(randomizedSet.remove(1), randomizedSet.list); // true [2]
console.log(randomizedSet.insert(2)); // false
console.log(randomizedSet.getRandom()); // 2
*/
