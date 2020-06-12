// Round 1
function twoNumberSum(array, targetSum) {
  // Write your code here.
  const hashT = {}

  for (let num of array) {
    let complement = targetSum - num
    if (hashT[complement]) {
      return [num, complement]
    } else {
      hashT[num] = true
    }
  }
  return []
}

// Round 2
function twoNumberSum(array, targetSum) {
  const memo = {}

  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i]
    let complement = targetSum - array[i]
    if (memo[currentNum]) {
      return [currentNum, complement]
    } else {
      memo[complement] = true
    }
  }
  return []
}

// Round 3:
function twoNumberSum(array, targetSum) {
  const memo = {}
  for (let i = 0; i < array.length; i++) {
    let complement = targetSum - array[i]
    if (memo[array[i]]) {
      return [array[i], complement]
    } else {
      memo[complement] = true
    }
  }
  return []
}
