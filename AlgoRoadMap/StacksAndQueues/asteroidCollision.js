var asteroidCollision = function (asteroids) {
  // iterate through asteroids
  // at each index, check if you should add new asteroid or start
  // breaking previous ones

  if (!asteroids.length) return asteroids
  let stack = [asteroids[0]]

  for (let i = 1; i < asteroids.length; i++) {
    let add = true

    // collision
    if (asteroids[i] < 0 && stack[stack.length - 1] > 0) {
      while (stack.length !== 0 && stack[stack.length - 1] > 0) {
        let next = Math.abs(asteroids[i])
        let prev = stack[stack.length - 1]
        if (next === prev) {
          stack.pop()
          add = false
        }
        if (next > prev) stack.pop()
        else add = false
        if (!add) break
      }
    }
    if (add) stack.push(asteroids[i])
  }
  return stack
}
