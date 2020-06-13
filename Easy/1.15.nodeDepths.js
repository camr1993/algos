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

// Round 3:
function nodeDepths(root) {
  // Write your code here.
  return nodeDepthsHelper(root, 0)
}

function nodeDepthsHelper(node, depth) {
  if (!node.left && !node.right) {
    return depth
  }
  let leftSum = 0
  let rightSum = 0
  if (node.left) {
    leftSum = nodeDepthsHelper(node.left, depth + 1)
  }
  if (node.right) {
    rightSum = nodeDepthsHelper(node.right, depth + 1)
  }
  return depth + leftSum + rightSum
}
