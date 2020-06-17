function invertBinaryTree(tree) {
  // Write your code here.
  // at each node switch the left and right children
  if (tree.left || tree.right) {
    let temp = tree.left
    tree.left = tree.right
    tree.right = temp
    if (tree.left) {
      invertBinaryTree(tree.left)
    }
    if (tree.right) {
      invertBinaryTree(tree.right)
    }
  } else {
    return
  }
  return tree
}

// Round 2:
function invertBinaryTree(tree) {
  // Write your code here.
  if (!tree) {
    return
  }
  let temp = tree.left
  tree.left = tree.right
  tree.right = temp
  invertBinaryTree(tree.left)
  invertBinaryTree(tree.right)

  return tree
}
