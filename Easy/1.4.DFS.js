// Round 1
class Node {
  constructor(name) {
    this.name = name
    this.children = []
  }

  addChild(name) {
    this.children.push(new Node(name))
    return this
  }

  depthFirstSearch(array) {
    // Write your code here.
    array.push(this.name)
    for (let child of this.children) {
      child.depthFirstSearch(array)
    }
    // this will run for every call but we only care about the
    // first recursive call returning an array of all the
    // children
    return array
  }
}

// Round 2:
class Node {
  constructor(name) {
    this.name = name
    this.children = []
  }

  addChild(name) {
    this.children.push(new Node(name))
    return this
  }

  depthFirstSearch(array) {
    // Round 2:
    array.push(this.name)
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].depthFirstSearch(array)
    }
    return array
    // The reason for O(V+E) time:
    // It's V because you have to visit every node
    // E because its not a binary tree! You have to
    // think about what operations you are doing at each
    // node. Its going to be a for loop that iterates over
    // all of its children! Binary tree is only going to be
    // left or right, so its just O(N)
  }

  // this.name = 'A'
  // this.children = ['B', 'C', 'D']
}
