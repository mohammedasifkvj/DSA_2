// Queue DS is a sequentail collection of elements that follow the First In First Out(FIFO)
// the first inserted into queue is the first element to be removed
// Queue is an Abstract DT .It is defined by its behaviour rather than being mathematical model
// That is Queue is simply a list ,what make it a Queue is how it behave
// Queue supports two main operation
//   --Enqueue -which add elements to the rear/tail of the collection
//   --Dequeue -which remove an element from front/head the collection

//   Usage 
//   -  
//   Eg - CPU task scheduling
//      - callback Queue in JS runtime which determine the order of code execution


// This is not optimized code of Queue DS
class Queue{
    constructor(){
        this.items=[]
    }

    enqueue(elelment){
        this.items.push(elelment)
    }

    dequeue(){
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length===0
    }

    //peak - to return the element at the front of the queue without removing
    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }
 // Number of elements in the queue
    size(){
        return this.items.length
    }

    //print the cutternly present elementsin the queue
    print(){
        console.log(this.items.toString());
    }
}

const queue=new Queue()
console.log(queue.isEmpty());
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.size());
queue.print()

console.log(queue.dequeue());
queue.print()
console.log(queue.peek());
