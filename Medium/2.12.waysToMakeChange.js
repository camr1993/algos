function numberOfWaysToMakeChange(n, denoms) {
  // Make a new array of length n+1 that will use dynamic
  // programming to continually count all the ways to make
  // change
  const ways = new Array(n + 1).fill(0)

  // You will iterate through 'ways' for EACH denom.
  // check if denom is less than amount, and if so,
  // add to 'ways'
  // also initliaze 'ways[0]' at 1 (for the first iteration
  // when checking ways for denom=1, every number has only one
  // way (ex: one way to use denom=1 to get $10 -> 10x1))
  ways[0] = 1

  for (let denom of denoms) {
    for (let amount = 1; amount < n + 1; amount++) {
      if (denom <= amount) {
        ways[amount] += ways[amount - denom] // will always add 1 when it gets to ex) ways[5-5] = ways[0] = 1
      }
    }
  }
  return ways[n] // dynamic programming
}
