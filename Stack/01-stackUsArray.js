class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is Empty, can't pop";
        }
        return this.stack.pop();
    }

    size() {
        return this.stack.length;
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is Empty";
        }
        return this.stack[this.stack.length - 1];
    }

    printStack() {
        if (this.isEmpty()) {
            console.log("Stack is Empty");
        } else {
            console.log("Stack elements: ");
            for (let i = this.stack.length - 1; i >= 0; i--) {
                console.log(this.stack[i]);
            }
        }
    }

    // Helper function to delete middle element recursively
    deleteMiddleHelper(currentIndex, middleIndex) {
        if (currentIndex === middleIndex) {
            this.pop();  // Pop the middle element
            return;
        }

        // Temporarily pop the top element and store it
        let topElement = this.pop();

        // Recursive call to pop elements until reaching the middle
        this.deleteMiddleHelper(currentIndex - 1, middleIndex);

        // Push the temporarily popped elements back to the stack
        this.push(topElement);
    }

    // Method to delete the middle element
    deleteMiddle() {
        if (this.isEmpty()) {
            return "Stack is Empty";
        }

        const middleIndex = Math.floor(this.size() / 2);
        this.deleteMiddleHelper(this.size() - 1, middleIndex);
    }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.printStack();

stack.deleteMiddle();  // Deletes the middle element (30)
stack.printStack();
