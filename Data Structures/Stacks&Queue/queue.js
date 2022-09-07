// add to end remove from beggining; FIFO

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  addToEnd(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode
    }

    return ++this.size;

  }

  removeFromBeggining() {
    if (!this.first) return null;
    if (this.first === this.last) this.last = null;

    let temp = this.first;
    this.first = temp.next;
    this.size--
    return temp.value
  }
}