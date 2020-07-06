var evalRPN = function (tokens) {
  let stack = []
  for (let token of tokens) {
    if (token === '+') {
      stack.push(stack.pop() + stack.pop())
    } else if (token === '-') {
      let popped1 = stack.pop()
      let popped2 = stack.pop()
      stack.push(popped2 - popped1)
    } else if (token === '*') {
      stack.push(stack.pop() * stack.pop())
    } else if (token === '/') {
      let popped1 = stack.pop()
      let popped2 = stack.pop()
      stack.push(Math.trunc(popped2 / popped1))
    } else {
      stack.push(Number(token))
    }
  }
  return stack[0]
}
