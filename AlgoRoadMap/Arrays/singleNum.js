var singleNumber = function (nums) {
  let hash = {}
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = hash[nums[i]] + 1 || 1
  }
  for (let key in hash) {
    if (hash[key] === 1) {
      return key
    }
  }
}
