class MinHeap {
  constructor (array) {
    this.heap = this.buildHeap(array);
  }
  
  // Compare parent with 2 children and swap smallest child with parent if parent < Min(child)
  // O(log(N)) || O(1)
  siftDown(currentIdx, endIdx, heap) { //heap is either the array or heap
    let childOneIdx = currentIdx * 2 +1
    while(childOneIdx <= endIdx) {
      const childTwoIdx = currentIdx *2 +2 <= endIdx ? currentIdx *2 +2: -1 // condition to check if child2 exists
      let idxToSwap;
      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) idxToSwap = childTwoIdx
      else idxToSwap = childOneIdx

      if (heap[idxToSwap] < heap[currentIdx]) {
        [heap[currentIdx], heap[idxToSwap]] = [heap[idxToSwap], heap[currentIdx]] 
        currentIdx = idxToSwap // reseting condition for while loop
        childOneIdx = currentIdx * 2 +1
      } else return 
    }
  }

  // O(log(N)) || O(1)
  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1)/2)
    while(currentIdx > 0 && heap[currentIdx] < heap[parentIdx]){
      [heap[currentIdx], heap[parentIdx]] = [heap[parentIdx], heap[currentIdx]]
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1)/2)
    }
  }

  // O(log(N)) || O(1)
  remove() { // remove the top element, like popping out of the stack
    [this.heap[0], this.heap[this.heap.length -1]] = [this.heap[this.heap.length -1], this.heap[0]]
    const valueToRemove = this.heap.pop()
    this.siftDown(0,this.heap.length-1, this.heap)
    return valueToRemove
  }

  // O(log(N)) || O(1)
  insert(value) {
    this.heap.push(value)
    this.siftUp(this.heap.length -1, this.heap)
  }

  // O(n) || O(1)
  buildHeap(array) {
    const firstParent = Math.floor((array.length-2)/2)
    for(let currentIdx= firstParent; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length-1, array)
      // awesome reason why we use siftDown 
      // if we use siftUp => O(Nlog(N)) | O(1))
      // if we use siftDow => 0(N) | O(1))
    }
    return array
  }

  // O(1) || O(1)
  peak() {
    return this.heap[0]
  }
}