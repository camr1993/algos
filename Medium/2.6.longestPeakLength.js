/* eslint-disable complexity */
// Round 1:
function longestPeak(array) {
  // Write your code here.
  let longestPeakLength = 0
  let i = 1
  // find a peak, iterate left and right to find where peak extends to
  while (i < array.length - 1) {
    const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i]
    if (!isPeak) {
      i++
      continue // breaks current iteration and goes through while loop again
    }

    let leftIdx = i - 2
    while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
      leftIdx--
    }
    let rightIdx = i + 2
    while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
      rightIdx++
    }

    const currentPeakLength = rightIdx - leftIdx - 1
    if (currentPeakLength > longestPeakLength) {
      longestPeakLength = currentPeakLength
    }
    i = rightIdx
  }
  return longestPeakLength
}
