function getNthFib(n) {
  // Recursive:
  // position: 1, 2, 3, 4, 5, 6, 7
  // fib:      0, 1, 1, 2, 3, 5, 8
  if (n === 1) {
    return 0
  }
  if (n === 2) {
    return 1
  }
  return getNthFib(n - 2) + getNthFib(n - 1)
}

function getNthFib(n) {
  // Recursive with MEMO:
  // position: 1, 2, 3, 4, 5, 6, 7
  // fib:      0, 1, 1, 2, 3, 5, 8
  return getNthFibHelper(n, {})
}

function getNthFibHelper(n, memo) {
  if (n === 1) {
    memo[1] = 0
    return 0
  }
  if (n === 2) {
    memo[2] = 1
    return 1
  }
  if (memo[n]) {
    return memo[n]
  } else {
    memo[n] = getNthFib(n - 2) + getNthFib(n - 1)
    return memo[n]
  }
}

function getNthFib(n) {
  // Write your code here.
  let lastTwo = [0, 1]
  let counter = 2
  while (counter < n) {
    let sum = lastTwo[0] + lastTwo[1]
    lastTwo[0] = lastTwo[1]
    lastTwo[1] = sum
    counter++
  }
  if (n === 1) {
    return 0
  } else {
    return lastTwo[1]
  }
}
