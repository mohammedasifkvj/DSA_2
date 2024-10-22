class Stack {
    constructor() {
        this.stack = {};
        this.count = 0;
    }

    push(element) {
        this.stack[this.count] = element;
        this.count++;
    }

    isEmpty() {
        return this.count === 0;
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is Empty, can't pop";
        }
        this.count--;
        const topElement = this.stack[this.count];
        delete this.stack[this.count];
        return topElement;
    }

    size() {
        return this.count;
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is Empty";
        }
        return this.stack[this.count - 1];
    }

    printStack() {
        if (this.isEmpty()) {
            console.log("Stack is Empty");
        } else {
            console.log("Stack elements: ");
            for (let i = this.count - 1; i >= 0; i--) {
                console.log(this.stack[i]);
            }
        }
    }

    // Helper function to delete the middle element recursively
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

        const middleIndex = Math.floor(this.count / 2);
        this.deleteMiddleHelper(this.count - 1, middleIndex);
    }
}

// Example usage
const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);
stack.push(500);
stack.printStack();

stack.deleteMiddle();  // Deletes the middle element (300)
stack.printStack();
