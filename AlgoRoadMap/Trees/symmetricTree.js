var isSymmetric = function (root) {
  if (!root) return true
  return isSymmetricHelper(root.left, root.right)
}

function isSymmetricHelper(p, q) {
  if (!p && !q) return true
  if (!p || !q) return false
  if (p.val !== q.val) return false

  return (
    isSymmetricHelper(p.left, q.right) && isSymmetricHelper(p.right, q.left)
  )
}
