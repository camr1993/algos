var preorder = function (root) {
  let array = []
  if (root) {
    preorderHelper(root, array)
  }
  return array
}

function preorderHelper(root, array) {
  array.push(root.val)
  for (let i = 0; i < root.children.length; i++) {
    preorderHelper(root.children[i], array)
  }
}
