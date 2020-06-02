/* eslint-disable complexity */
/* eslint-disable no-lonely-if */
class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    // for insert, you can't just move until its null
    // Need to be able to set prior Node's left/right
    // to reference new node
    let currNode = this
    while (true) {
      if (value < currNode.value) {
        if (currNode.left === null) {
          currNode.left = new BST(value)
          break
        } else {
          currNode = currNode.left
        }
      } else {
        if (currNode.right === null) {
          currNode.right = new BST(value)
          break
        } else {
          currNode = currNode.right
        }
      }
    }
    return this
  }

  contains(value) {
    // Write your code here.
    // for contains, move currNode until its null
    // if it gets to null that means value doesnt exists
    let currNode = this
    while (currNode) {
      if (value < currNode.value) {
        currNode = currNode.left
      } else if (value > currNode.value) {
        currNode = currNode.right
      } else {
        return true
      }
    }
    return false
  }

  remove(value, parentNode = null) {
    // Write your code here.
    // Do not edit the return statement of this method.
    let currentNode = this
    while (currentNode) {
      // traversing left
      if (value < currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.left
      }
      // traversing right
      else if (value > currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.right
      }
      // when we find value to remove
      else {
        // 2 children: hardest case. Find right-most min, replace,
        // get rid of copy (original right-most min)
        if (currentNode.left && currentNode.right) {
          currentNode.value = currentNode.right.getMinValue()
          currentNode.right.remove(currentNode.value, currentNode)
        }
        // edge case check if we are at the root node
        else if (parentNode === null) {
          if (currentNode.left) {
            currentNode.value = currentNode.left.value
            currentNode.right = currentNode.left.right
            currentNode.left = currentNode.left.left
          } else if (currentNode.right) {
            currentNode.value = currentNode.right.value
            currentNode.left = currentNode.right.left
            currentNode.right = currentNode.right.right
          } else {
            // this is a single-node tree; do nothing
          }
        }
        // if we have 1 or 0 children and its not the root node:
        // assign parentNodes left/right to currentNode's left/right
        else if (parentNode.left === currentNode) {
          // at a left child
          // parentNode's new left is either currentNode's left of right
          parentNode.left =
            currentNode.left !== null ? currentNode.left : currentNode.right
        } else if (parentNode.right == currentNode) {
          // at a right child
          parentNode.right =
            currentNode.left !== null ? currentNode.left : currentNode.right
        }
        break
      }
    }
    return this
  }

  getMinValue() {
    let currentNode = this
    while (currentNode.left) {
      currentNode = currentNode.left
    }
    return currentNode.value
  }
}
