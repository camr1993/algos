function threeNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a - b)
  const triplets = []

  for (let i = 0; i < array.length - 2; i++) {
    let currNum = array[i]
    let left = i + 1
    let right = array.length - 1
    while (left < right) {
      if (currNum + array[left] + array[right] === targetSum) {
        triplets.push([currNum, array[left], array[right]])
        left++
      } else if (currNum + array[left] + array[right] < targetSum) {
        left++
      } else if (currNum + array[left] + array[right] > targetSum) {
        right--
      }
    }
  }
  return triplets
}

// Round 2:
function threeNumberSum(array, targetSum) {
  // Write your code here.
  let newArr = []
  array.sort((a, b) => a - b)
  for (let i = 0; i < array.length; i++) {
    let current = array[i]
    let left = i + 1
    let right = array.length - 1
    while (left < right) {
      let testSum = current + array[left] + array[right]
      if (testSum < targetSum) {
        left++
      } else if (testSum > targetSum) {
        right--
      } else {
        newArr.push([current, array[left], array[right]])
        left++
      }
    }
  }
  return newArr
}
