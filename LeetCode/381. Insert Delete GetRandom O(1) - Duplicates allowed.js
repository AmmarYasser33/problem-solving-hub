var RandomizedCollection = function () {
  this.map = new Map();
  this.list = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
  if (!this.map.has(val)) {
    this.map.set(val, [this.list.length]);
    this.list.push(val);
    return true;
  } else {
    const indices = this.map.get(val);
    indices.push(this.list.length);
    this.map.set(val, indices);
    this.list.push(val);
    return false;
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
  if (this.map.has(val)) {
    const indices = this.map.get(val);
    const indToRemove = indices.pop();

    if (indToRemove !== this.list.length - 1) {
      const lastVal = this.list[this.list.length - 1];
      this.list[indToRemove] = lastVal;

      const lastValIndices = this.map.get(lastVal);
      lastValIndices[lastValIndices.length - 1] = indToRemove;
      lastValIndices.sort((a, b) => a - b);
      this.map.set(lastVal, lastValIndices);
    }

    this.list.pop();

    if (indices.length === 0) {
      this.map.delete(val);
    }

    return true;
  }

  return false;
};

/**
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
  const randInd = Math.floor(Math.random() * this.list.length);
  return this.list[randInd];
};

/*
// Test Case 1
const randomizedCollection = new RandomizedCollection();
console.log(randomizedCollection.insert(1)); // true
console.log(randomizedCollection.insert(1), randomizedCollection.list); // false [1,1]
console.log(randomizedCollection.insert(2), randomizedCollection.list); // true [1,1,2]
console.log(randomizedCollection.getRandom());
// - return 1 with probability 2/3, or
// - return 2 with probability 1/3.
console.log(randomizedCollection.remove(1), randomizedCollection.list); // true [1,2]
console.log(randomizedCollection.getRandom()); // 1 or 2

console.log("----------");

// Test Case 2
const randomizedCollection2 = new RandomizedCollection();
console.log(randomizedCollection2.insert(1)); // true
console.log(randomizedCollection2.remove(2)); // false
console.log(randomizedCollection2.insert(2), randomizedCollection2.list); // true [1,2]
console.log(randomizedCollection2.getRandom()); // 1 or 2
console.log(randomizedCollection2.remove(1), randomizedCollection2.list); // true [2]
console.log(randomizedCollection2.insert(2), randomizedCollection2.list); // false [2,2]
console.log(randomizedCollection2.getRandom()); // 2

console.log("----------");

// Test Case 3
const randomizedCollection3 = new RandomizedCollection();
console.log(randomizedCollection3.insert(1), randomizedCollection3.list); // true [1]
console.log(randomizedCollection3.remove(1), randomizedCollection3.list); // true []
console.log(randomizedCollection3.insert(1), randomizedCollection3.list); // true [1]
*/
