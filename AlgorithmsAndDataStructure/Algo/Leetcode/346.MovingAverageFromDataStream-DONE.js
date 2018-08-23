// Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

// Example:

// MovingAverage m = new MovingAverage(3);
// m.next(1) = 1
// m.next(10) = (1 + 10) / 2
// m.next(3) = (1 + 10 + 3) / 3
// m.next(5) = (10 + 3 + 5) / 3

class MovingAverage{
    constructor(size){
        this.collection = []
        this.size = size
        this.sum = 0 
    }

    next(val){
        if(this.collection.length < this.size){
            this.collection.push(val)
            this.sum += val
        }else {
            let v = this.collection.shift()
            this.sum -=v
            this.collection.push(val)
            this.sum += val
        }
        return this.sum / this.collection.length
    }
}