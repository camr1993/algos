function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value)
}

function findClosestValueInBstHelper(tree, target, closest) {
  let currentNode = tree
  while (currentNode) {
    if (target === currentNode.value) return currentNode.value

    if (Math.abs(currentNode.value - target) < Math.abs(closest - target)) {
      closest = currentNode.value
    }

    if (target < currentNode.value) {
      currentNode = currentNode.left
    } else {
      currentNode = currentNode.right
    }
  }
  return closest
}
