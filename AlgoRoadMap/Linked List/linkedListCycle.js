var hasCycle = function (head) {
  let tortise = head
  let hare = head

  while (hare) {
    if (!hare.next) return false
    hare = hare.next.next
    tortise = tortise.next
    if (tortise === hare) return true
  }

  return false
}
