function reverseLinkedList(head) {
  // p1 is the node (pointer) before
  // p2 is current node
  // p3 is current.next
  let p1 = null
  let p2 = head
  while (p2 !== null) {
    const p3 = p2.next
    p2.next = p1

    // move pointers down the list
    p1 = p2
    p2 = p3
  }
  return p1
}
