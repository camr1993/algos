var maxSubArray = function (nums) {
  // dynamic programming: keep track of highest steak as you go
  let maxSum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1]
    }
    maxSum = Math.max(nums[i], maxSum)
  }
  return maxSum
}
