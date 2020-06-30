var leafSimilar = function (root1, root2) {
  let arr1 = []
  let arr2 = []
  leafValues(root1, arr1)
  leafValues(root2, arr2)
  return checkArrays(arr1, arr2)
}

function leafValues(node, arr) {
  if (!node.left && !node.right) {
    arr.push(node.val)
  }
  if (node.left) {
    leafValues(node.left, arr)
  }
  if (node.right) {
    leafValues(node.right, arr)
  }
}

function checkArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}
