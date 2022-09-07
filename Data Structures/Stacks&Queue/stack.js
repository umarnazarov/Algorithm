// Stack - add to the begginig and remove from beggining.
// last in first out LIFO

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  unshift(value) {
    let newNode = new Node(value)
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++
    return this;
  }

  shift() {
    if (this.first) return null;

    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;

    return temp.value;
  }
}