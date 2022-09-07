class HashMap {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let primeNumber = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let code = char.charCodeAt(0) - 96;
      total = (total * primeNumber + code) % this.keyMap.length;
    }
    return total
  }

  set(key, val) {
    let hashed = this._hash(key);
    if (!this.keyMap[hashed]) {
      this.keyMap[hashed] = []
    }
    this.keyMap[hashed].push([key, val])
    return this
  }

  get(key) {
    let hashed = this._hash(key);
    let spot = this.keyMap[hashed];
    if (!spot) return false;

    for (let arr of spot) {
      if (arr[0] === key) {
        return arr[1]
      }
    }
    return undefined
  }
}