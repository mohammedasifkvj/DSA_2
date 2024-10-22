// Both enqueue and dequeque have conatant time complexity

class Queue{
    constructor(){
        this.items={}
        this.rear=0
        this.front=0
    }

//Addelements to queue
   enqueue(element){
    this.items[this.rear]=element
    this.rear++    //incrementing count
   }

   dequeue(){
    const item=this.items[this.front]
    delete this.items[this.front]   // delete in an in-built object method 
    this.front++    // advancing the front tracker by 1 to dequeue next elemnt when necessary
    return item
   }

   isEmpty(){
    return this.rear - this.front ===0
   }

   size(){
    return this.rear - this.front
   }

   peek(){
    return this.items[this.front]
   }

   print(){
    console.log(this.items);
   }
}

let queue=new Queue()
console.log(queue.isEmpty());
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.size());
queue.print()

console.log(queue.dequeue());
queue.print()
console.log(queue.peek());