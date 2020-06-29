var isUnivalTree = function (root) {
  return (
    isUnivalTreeHelper(root.left, root.val) &&
    isUnivalTreeHelper(root.right, root.val)
  )
}

function isUnivalTreeHelper(currentNode, parentVal) {
  if (currentNode === null) return true
  if (currentNode.val !== parentVal) return false
  return (
    isUnivalTreeHelper(currentNode.left, currentNode.val) &&
    isUnivalTreeHelper(currentNode.right, currentNode.val)
  )
}
