class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function validateBst(tree) {
  // Write your code here.
  return validateBstHelper(tree, -Infinity, Infinity)
}

function validateBstHelper(tree, minValue, maxValue) {
  // kind of have 2 bases cases. Each will stop the recursion
  // either gets to the end, and its valid, or doesnt get to the end
  // and its invalid
  if (tree === null) return true
  if (tree.value < minValue || tree.value >= maxValue) return false
  return (
    validateBstHelper(tree.left, minValue, tree.value) &&
    validateBstHelper(tree.right, tree.value, maxValue)
  )
}

// Round 2:
class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function validateBst(tree) {
  // Write your code here.
  return validateBstHelper(tree, -Infinity, Infinity)
}

function validateBstHelper(tree, minValue, maxValue) {
  if (!tree) return true
  if (tree.value >= maxValue || tree.value < minValue) return false
  return (
    validateBstHelper(tree.left, minValue, tree.value) &&
    validateBstHelper(tree.right, tree.value, maxValue)
  )
}
