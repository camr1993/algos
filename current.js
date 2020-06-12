function getNthFib(n) {
  if (n === 1) {
    return 0
  }
  if (n === 2) {
    return 1
  }
  return getNthFib(n - 1) + getNthFib(n - 2)
}

function getNthFib(n) {
  return getNthFibHelper(n, { 1: 0, 2: 1 })
}

function getNthFibHelper(n, memo) {
  if (n in memo) {
    return memo[n]
  } else {
    memo[n] = getNthFibHelper(n - 1, memo) + getNthFibHelper(n - 2, memo)
    return memo[n]
  }
}

function getNthFib(n) {
  let lastTwo = [0, 1]
  if (n === 1) return 0
  let current = 2

  while (current < n) {
    let sum = lastTwo[0] + lastTwo[1]
    lastTwo[0] = lastTwo[1]
    lastTwo[1] = sum
    current++
  }
  return lastTwo[1]
}
