var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }
  this.stack1.push(x);
  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop());
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.stack1.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.stack1[this.stack1.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.length === 0;
};

/*
// Test case:
const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek(), queue.stack1); // 1 [1, 2]
console.log(queue.pop(), queue.stack1); // 1 [2]
console.log(queue.empty(), queue.stack1); // false [2]
*/
