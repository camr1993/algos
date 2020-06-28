function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var mergeTwoLists = function (l1, l2) {
  // at each point, check which is smaller: l1 node or l2 node
  // choose smaller one,
  // and then move smaller pointer one over, and repeat process
  if (!l1 && !l2) {
    return null
  } else if (!l1) {
    return l2
  } else if (!l2) {
    return l1
  }
  let min = Math.min(l1.val, l2.val)
  let currentNode = new ListNode(min)
  let head = currentNode
  let current1 = l1
  let current2 = l2
  if (currentNode.val === l1.val) {
    current1 = current1.next
  } else {
    current2 = current2.next
  }

  while (current1 || current2) {
    if (current1 && current2) {
      if (current1.val <= current2.val) {
        currentNode.next = new ListNode(current1.val)
        current1 = current1.next
      } else {
        currentNode.next = new ListNode(current2.val)
        current2 = current2.next
      }
    } else if (current1) {
      currentNode.next = new ListNode(current1.val)
      current1 = current1.next
    } else {
      currentNode.next = new ListNode(current2.val)
      current2 = current2.next
    }
    currentNode = currentNode.next
  }
  return head
}
