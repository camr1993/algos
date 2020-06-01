// Round 1:
function productSum(array, depthLevel = 1) {
  // Write your code here.
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    let element = array[i]
    if (Array.isArray(element)) {
      sum += productSum(element, depthLevel + 1)
    } else {
      sum += element
    }
  }
  return sum * depthLevel
}

// Round 2:
function productSum(array, currentDepth = 1) {
  // Write your code here.
  let currentSum = 0
  for (let i = 0; i < array.length; i++) {
    let el = array[i]
    if (Array.isArray(el)) {
      currentSum += productSum(el, currentDepth + 1)
    } else {
      currentSum += el
    }
  }
  return currentDepth * currentSum
}
