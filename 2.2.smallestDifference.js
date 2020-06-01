function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  // [-1, 3, 5, 10, 20, 38]
  // [15, 17, 26, 134, 135]
  arrayOne = arrayOne.sort((a, b) => a - b)
  arrayTwo = arrayTwo.sort((a, b) => a - b)
  let oneIdx = 0
  let twoIdx = 0
  let smallest = [arrayOne[0], arrayTwo[0]]

  while (oneIdx < arrayOne.length && twoIdx < arrayTwo.length) {
    let currentDiff = Math.abs(arrayOne[oneIdx] - arrayTwo[twoIdx])
    if (currentDiff < Math.abs(smallest[1] - smallest[0])) {
      smallest = [arrayOne[oneIdx], arrayTwo[twoIdx]]
    }
    if (arrayOne[oneIdx] < arrayTwo[twoIdx]) {
      oneIdx++
    } else {
      twoIdx++
    }
  }
  return smallest
}
