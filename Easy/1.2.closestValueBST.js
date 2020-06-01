// Round 1
function findClosestValueInBst(tree, target) {
  // Recursive method (not as good)
  // using a helper method so we can keep track of closest value (initialized at tree.value)
  return findClosestValueInBstHelper(tree, target, tree.value)
}

function findClosestValueInBstHelper(tree, target, closest) {
  if (tree === null) return closest
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value
  }
  if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, closest)
  } else if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest)
  } else {
    return closest
  }
}

function findClosestValueInBst(tree, target) {
  // While loop: better method (better space complexity)
  // If you are narrowing in on a number (or searching for an equal number), while loop is better because you dont need to recursively go down each left and right branch!
  // using a helper method so we can keep track of closest value (initialized at tree.value)
  return findClosestValueInBstHelper(tree, target, tree.value)
}

function findClosestValueInBstHelper(tree, target, closest) {
  let currentNode = tree
  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left
    } else if (target > currentNode.value) {
      currentNode = currentNode.right
    } else {
      break
    }
  }
  return closest
}

// Round 2:
function findClosestValueInBst(tree, target) {
  // Round 2
  let closest = tree.value
  return BstHelper(tree, target, closest)
}

function BstHelper(tree, target, closest) {
  let currentNode = tree
  while (currentNode) {
    if (currentNode.value === target) {
      return currentNode.value
    }
    if (Math.abs(currentNode.value - target) < Math.abs(closest - target)) {
      closest = currentNode.value
    }
    if (target > currentNode.value) {
      currentNode = currentNode.right
    } else {
      currentNode = currentNode.left
    }
  }
  return closest
}
