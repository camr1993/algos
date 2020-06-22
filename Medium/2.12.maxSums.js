function maxSubsetSumNoAdjacent(array) {
  if (!array.length) return 0
  if (array.length === 1) return array[0]

  let second = Math.min(array[0])
  let first = Math.max(array[0], array[1]) // either sum of array[0] or new num
  // maxsums = dynamic array keeping track of total sums
  // only actually need the most recent 2 numbers though
  // (saves space)
  // maxsums[i] = max(maxsums[i-1], maxsums[i-2] + array[i])
  for (let i = 2; i < array.length; i++) {
    const current = Math.max(first, second + array[i])
    second = first
    first = current
  }
  return first
}

// Round 2:
function maxSubsetSumNoAdjacent(array) {
  if (!array.length) return 0
  if (array.length === 1) return array[0]

  // Basically keep track of the most recent two numbers
  // as well as the max of them. Only use the max of the two
  let second = array[0]
  let first = Math.max(array[0], array[1])
  for (let i = 2; i < array.length; i++) {
    // should we keep the most recent num (first) or
    // should we take the sum of two numbers back and
    // the current num?
    const current = Math.max(first, second + array[i])
    second = first
    first = current
  }
  return first
}
