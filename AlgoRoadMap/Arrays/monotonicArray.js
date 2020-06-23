var isMonotonic = function (A) {
  let incr = false
  let decr = false

  for (let i = 1; i < A.length; i++) {
    let current = A[i]
    let left = A[i - 1]
    if (current > left) {
      incr = true
    } else if (current < left) {
      decr = true
    }
    if (incr && decr) return false
  }
  return true
}
