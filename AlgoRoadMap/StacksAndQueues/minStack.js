var MinStack = function () {
  this.stack = []
  this.minStack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  if (!this.minStack.length || x <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(x)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let popped = this.stack.pop()
  if (popped === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop()
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1]
}
