class Graph {
  constructor() {
    this.adjancencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjancencyList[vertex]) this.adjancencyList[vertex] = []
    return this.adjancencyList
  }

  addEdge(vertexOne, vertexTwo) {
    if (this.adjancencyList[vertexOne]) {
      this.adjancencyList[vertexOne].push(vertexTwo)
    }
    if (this.adjancencyList[vertexTwo]) {
      this.adjancencyList[vertexTwo].push(vertexOne)
    }
  }

  removeEdge(vertexOne, vertexTwo) {
    this.adjancencyList[vertexOne] = this.adjancencyList[vertexOne].filter(c => c !== vertexTwo)
    this.adjancencyList[vertexTwo] = this.adjancencyList[vertexTwo].filter(c => c !== vertexOne)
  }

  removeVertex(vertex) {
    let list = this.adjancencyList[vertex];

    for (city of list) {
      this.removeEdge(vertex, city)
    }

    delete this.adjancencyList[vertex];
  }

  DFS(vertex) {
    let results;
    let seenVerteces = {};
    let adjancencyList = this.adjancencyList
    if (!adjancencyList[vertex]) return undefined

    const helper = vertex => {
      if (!vertex) return

      if (!seenVerteces[vertex]) seenVerteces[vertex] = true;

      for (let v of adjancencyList[vertex]) {
        if (!seenVerteces[v]) {
          seenVerteces[v] = true;
          helper(v);
        } else {
          continue
        };
      }
    }
    helper(vertex)
    results = Object.keys(seenVerteces)
    return results;
  }
}

let g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')