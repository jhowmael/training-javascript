/* Exercício 17: Crie uma classe Pilha.
Implemente métodos para empilhar, desempilhar e verificar o topo da pilha.*/

class Stack<T> {
    private items: T[] = [];

    push(element: T): void {
        this.items.push(element);
        console.log(`${element} pushed to stack.`);
    }

    pop(): T | undefined {
        if (this.isEmpty()) {
            console.log("Stack is empty. Nothing to pop.");
            return undefined;
        }
        const removed = this.items.pop();
        console.log(`${removed} popped from stack.`);
        return removed;
    }

    peek(): T | undefined {
        if (this.isEmpty()) {
            console.log("Stack is empty. No top element.");
            return undefined;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    printStack(): void {
        console.log("Current Stack:", this.items);
    }
}

const stack = new Stack<number>();

stack.push(10);
stack.push(20);
stack.push(30);
stack.printStack();

console.log("Top of stack:", stack.peek());

stack.pop();
stack.printStack();

stack.pop();
stack.pop();
stack.pop();  
