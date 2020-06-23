var findMaxConsecutiveOnes = function (nums) {
  let max = 0
  let currentMax = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentMax++
      if (currentMax > max) {
        max = currentMax
      }
    } else {
      currentMax = 0
    }
  }
  return max
}
