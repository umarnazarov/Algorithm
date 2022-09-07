class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++
    return this;
  }

  pop() {
    let current = this.head;
    let pre = current;
    if (!current) return undefined;
    while (!current.next) {
      pre = current
      current = current.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  shift() {
    if (head) {
      let preHead = this.head;
      this.head = preHead.next;
      this.length--
      return preHead;
    }
  }

  unshift(val) {
    let node = new Node(val);
    if (!head) {
      this.head = node;
      this.tail = this.head
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++
    return this
  }
}

function reverse(head) {
  let current = head;
  let next;
  let prev = null;

  while (current !== null) {
    next = current.next
    current.next = prev
    prev = current
    current = next
  }
  return prev
}