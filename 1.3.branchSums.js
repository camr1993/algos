// Round 1:
function depthSum(currentNode, currentBranchSum, totalArr) {
  // controlling for the edge case where a node only has one branch (but we are doing recursion on both .left and right!)
  if (!currentNode) {
    return
  }

  // every step, add on to the current sum
  currentBranchSum += currentNode.value

  // if we are at a leaf, push the branch sum to our array
  if (!currentNode.left && !currentNode.right) {
    totalArr.push(currentBranchSum)
    return
  }

  depthSum(currentNode.left, currentBranchSum, totalArr)
  depthSum(currentNode.right, currentBranchSum, totalArr)
}

// Round 2
function branchSums(root) {
  // Write your code here.
  let currentSum = 0
  // this helper doesn't return anything!
  // just has the side effect of appending to arr
  // could write it in a way that it returns an array
  // might have to use spread operator
  branchSumsHelper(root, currentSum, (arr = []))
  return arr
}

function branchSumsHelper(node, currentSum, arr) {
  if (!node) {
    return
  }
  currentSum += node.value
  if (!node.left && !node.right) {
    // this arr.push pushes it into the current recursive call's arr
    arr.push(currentSum)
  }
  branchSumsHelper(node.left, currentSum, arr)
  branchSumsHelper(node.right, currentSum, arr)
}
