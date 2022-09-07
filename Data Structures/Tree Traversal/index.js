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

  // Breadth First Search -> ->
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

  // Depth First PreOrder

  DFP() {
    let results = [];

    function search(node) {
      results.push(node.value);
      if (node.left) search(node.left);
      if (node.right) search(node.right);
    }

    search(this.root)
    return results
  }

  // Depth First PostOrder

  DFPO() {
    let results = [];

    function search(node) {
      if (node.left) search(node.left);
      if (node.right) search(node.right);
      results.push(node.value);
    }

    search(this.root)
    return results
  }

  // Depth First inOrder

  DFPO() {
    let results = [];

    function search(node) {
      if (node.left) search(node.left);
      results.push(node.value);
      if (node.right) search(node.right);
    }

    search(this.root)
    return results
  }
}