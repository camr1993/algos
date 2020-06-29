var oddEvenList = function (head) {
  // We just need to form a linked list of all odd nodes(X) and another linked list of all even nodes(Y). Afterwards, we link Y to the end of X, and return the head of X.
  if (!head) return null

  let odd = head
  let even = head.next
  let evenHead = head.next

  while (even && even.next) {
    // make 2 separate linked lists (odds only and even only)
    odd.next = odd.next.next
    even.next = even.next.next

    // update pointers to continue while loop
    odd = odd.next
    even = even.next
  }

  // make end of odd list point to head of even list
  odd.next = evenHead
  return head
}
