class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val)
    if (!this.root) {
      this.root = newNode;
      return this
    }

    let currentNode = this.root
    while (true) {
      if (val === currentNode.value) return undefined
      if (newNode.value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this
        }
        currentNode = currentNode.left;
      }
    }
  }

  find(val) {
    let currentNode = this.root
    while (true) {
      if (val === currentNode.value) return currentNode
      if (val > currentNode.value) {
        if (!currentNode.right) return -1
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) return -1
        currentNode = currentNode.left;
      }
    }
  }

  BST() {
    let queue = [],
      data = [],
      node = this.root;

    node.push(node)
    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    return data
  }
}