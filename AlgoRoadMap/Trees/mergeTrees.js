var mergeTrees = function (t1, t2) {
  // at each point: check values of t1 and t2, create a newNode based on those values
  // then recursively call on newNode.left and newNode.right
  if (t1 === null && t2 === null) return null
  let value = (t1 === null ? 0 : t1.val) + (t2 === null ? 0 : t2.val)
  let newNode = new TreeNode(value)

  newNode.left = mergeTrees(
    t1 === null ? null : t1.left,
    t2 === null ? null : t2.left
  )
  newNode.right = mergeTrees(
    t1 === null ? null : t1.right,
    t2 === null ? null : t2.right
  )
  return newNode
}
