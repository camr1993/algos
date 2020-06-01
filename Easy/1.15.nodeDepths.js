// Round 1:
function nodeDepths(root) {
  // Write your code here.
  return nodeDepthsHelper(root, 0)
}

function nodeDepthsHelper(currNode, depth) {
  // when using recursive, make sure you get your base case down first!
  if (!currNode) {
    return 0
  }

  return (
    depth +
    nodeDepthsHelper(currNode.left, depth + 1) +
    nodeDepthsHelper(currNode.right, depth + 1)
  )
}

// Round 2:
function nodeDepths(root) {
  // Round 2
  return nodeDepthsHelper(root, 0)
}

function nodeDepthsHelper(currNode, depthSum) {
  if (!currNode) {
    return 0
  } else {
    return (
      depthSum +
      nodeDepthsHelper(currNode.left, depthSum + 1) +
      nodeDepthsHelper(currNode.right, depthSum + 1)
    )
  }
}
