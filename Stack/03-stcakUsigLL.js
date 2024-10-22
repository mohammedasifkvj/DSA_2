////////////!    Stack-Using-LinkedList   ////////////!

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Stack {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }

//     push(value){
//         let newNode = new Node(value)
//         if(this.head === null){
//             this.head = newNode
//         }else{
//             newNode.next = this.head
//             this.head = newNode
//         }
//         this.size++
//     }

//     pop(){
//         if(this.isEmpty()){
//             return null
//         }
//         let value = this.head.value
//         this.head = this.head.next
//         this.size--
//         return value
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.head.value
//     }

//     toArray(){
//         let arr = []
//         let curr = this.head
//         while(curr){
//             arr.push(curr.value)
//             curr = curr.next
//         }
//         return arr
//     }

//     clear(){
//        this.top = null
//        this.count =0
//     }

//     print(){
//         if(this.isEmpty()){
//             return "List is Empty"
//         }else{
//             let curr = this.head
//             let listValue = ""
//             while(curr){
//                 listValue += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log("Listed Values :",listValue)
//         }
//     }
// }

// const stack = new Stack()
// console.log(stack.isEmpty())
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)

// stack.print()

////////////!    Stack-LinkedList-Reverse   ////////////!

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    push(value){
        let newNode = new Node(value)
        if(this.head === null){
            this.head = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        let next = null;

        while (curr !== null) {
            next = curr.next;  // temporarily store the next node
            curr.next = prev;  // reverse the current node's pointer
            prev = curr;       // move the previous node to the current node
            curr = next;       // move to the next node
        }
        this.head = prev;  // update the head to the new first node
    }

    print(){
        if(this.isEmpty()){
            return "List is Empty"
        }else{
            let curr = this.head
            let listValue = ""
            while(curr){
                listValue += `${curr.value} `
                curr = curr.next
            }
            console.log("Listed Values :",listValue)
        }
    }
}

const stack = new Stack()
console.log(stack.isEmpty())
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)

stack.print();

stack.reverse();

console.log("Reversed list:");
stack.print();