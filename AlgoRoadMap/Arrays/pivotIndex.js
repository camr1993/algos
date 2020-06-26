var pivotIndex = function (nums) {
  if (nums.length <= 2) return -1
  let i = 0
  let leftSum = 0
  let rightSum = 0
  for (let i = 1; i < nums.length; i++) {
    rightSum += nums[i]
  }
  while (i < nums.length) {
    if (leftSum === rightSum) {
      return i
    }
    i++
    leftSum += nums[i - 1]
    rightSum -= nums[i]
  }
  return -1
}
