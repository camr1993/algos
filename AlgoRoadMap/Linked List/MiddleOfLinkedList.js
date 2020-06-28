var middleNode = function (head) {
  let length = 0
  let currentNode = head
  while (currentNode) {
    length++
    currentNode = currentNode.next
  }

  let mid = Math.ceil(length / 2)
  if (length % 2 === 0) {
    mid++
  }

  let pointer = 0
  currentNode = head
  while (currentNode) {
    pointer++
    if (pointer === mid) {
      return currentNode
    }
    currentNode = currentNode.next
  }
}
