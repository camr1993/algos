var twoSum = function (nums, target) {
  let hash = {}
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]
    if (nums[i] in hash) {
      return [hash[nums[i]], i]
    } else {
      hash[complement] = i
    }
  }
}
