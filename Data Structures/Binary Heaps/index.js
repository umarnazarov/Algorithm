// Each parent's child is less than its parent.
// In maxBinaryHeap parent is always bigger than its child and opposite for minBinaryHeap
// Both sides are almost filled
// get left child formula: 2n + 1
// get right child formula: 2n + 2
// get parent (n - 1)/2 floored

class BinaryHeaps {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}

