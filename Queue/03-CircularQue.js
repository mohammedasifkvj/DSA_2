// // Circular queue is an extended version of regular queue
// Also referred as circulaer buffer or ring buffer and follow FIFO principle
// The size of the que is fixed,and single block of memory is used as if the first element is connected to the last element
// Circular queue will reuse the empty block created during dequeue operation
// when working with queue of maximum size, a circular is a great implementation choice
// Usage
//   =Clock 
//   =streamin Data 
//   =Traffic Lights

class CircularQueue{
    constructor(capacity){
        this.items=new Array(capacity)
        this.capacity=capacity
        this.currentLength=0
        this.rear= -1
        this.front= -1
    }

    isEmpty(){
        return this.currentLength===0
    }

    isFull(){
        return this.currentLength===this.capacity
    }

    enqueue(element){
        if(! this.isFull()){
            this.rear=(this.rear+1) %this.capacity // now the rear pointer will point to index 0
            this.items[this.rear]=element  //Add elelmt to index 0
            this.currentLength++
            if(this.front===-1){
                this.front=this.rear
            }
        }

    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const item=this.items[this.front]
        this.items[this.front]=null
        this.front=(this.front+1) % this.capacity
        this.currentLength-=1
        if(this.isEmpty()){
            this.front=-1
            this.rear=-1
        }
        return item
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        console.log("No one is at peak,Queue is empty");
        return null
    }

    print(){
        if(this.isEmpty()){
            console.log("Que is empty");
        }else{
            let i
            let str=''
            for(i=this.front; i!==this.rear;i=(i+1)% this.capacity){
                str+=this.items[i] +" "
            }
            str+=this.items[i]
            console.log(str);
            
        }
    }
}
let queue=new CircularQueue(5)

console.log(queue.isEmpty());
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.print()

console.log(queue.dequeue());
queue.print()
console.log(queue.peek());
