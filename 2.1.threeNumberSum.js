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
