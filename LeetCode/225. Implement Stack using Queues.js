var MyStack = function () {
  this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x);

  for (let i = 0; i < this.queue.length - 1; i++) {
    this.queue.push(this.queue.shift());
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};
