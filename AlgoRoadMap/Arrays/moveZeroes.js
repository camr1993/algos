var moveZeroes = function (nums) {
  let numsLength = nums.length
  let i = 0
  while (i < nums.length) {
    if (nums[i] === 0) {
      let zero = nums.splice(i, 1)
      nums.push(zero)
    } else {
      i++
    }
  }
  return nums
}
