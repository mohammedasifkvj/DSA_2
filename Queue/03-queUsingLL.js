class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    enqueue(value){
        let newNode = new Node(value)
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        let removeValue = this.head.value
        if(this.head === this.tail){
            this.tail = null
        }
        this.head = this.head.next
        this.size--
        return removeValue
    }

    print(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return null
        }
        let curr = this.head
        let listValue = ""
        while(curr){
            listValue += `${curr.value} `
            curr = curr.next
        }
        console.log("listed Values" , listValue)
    }
}

const queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue()

queue.print()