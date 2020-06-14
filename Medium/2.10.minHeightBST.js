/* eslint-disable no-lonely-if */
function minHeightBst(array) {
  // Write your code here.
  // IF YOU WERE TO USE INSERT METHOD:
  // insert starts at the root node and finds where to put
  // new value. So to insert all the array values, it would be
  // nlogn. Don't need to use insert though! You can add to
  // the left and right as you go
  return minHelper(array, 0, array.length - 1)
}

function minHelper(array, left, right) {
  // need to insert the middle, then recursively call
  // on the left and right sides to do the same
  if (left > right) return null
  let mid = Math.floor((left + right) / 2)
  const bst = new BST(array[mid])
  bst.left = minHelper(array, left, mid - 1)
  bst.right = minHelper(array, mid + 1, right)
  return bst
}

class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value)
      } else {
        this.left.insert(value)
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value)
      } else {
        this.right.insert(value)
      }
    }
  }
}
