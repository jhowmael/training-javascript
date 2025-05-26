/* Exercício 18: Crie uma classe Fila.
Implemente métodos para enfileirar, desenfileirar e verificar o próximo elemento.*/

class Queue<T> {
    private items: T[] = [];

    enqueue(element: T): void {
        this.items.push(element);
        console.log(`${element} enqueued to queue.`);
    }

    dequeue(): T | undefined {
        if (this.isEmpty()) {
            console.log("Queue is empty. Nothing to dequeue.");
            return undefined;
        }
        const removed = this.items.shift();
        console.log(`${removed} dequeued from queue.`);
        return removed;
    }

    front(): T | undefined {
        if (this.isEmpty()) {
            console.log("Queue is empty. No front element.");
            return undefined;
        }
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    printQueue(): void {
        console.log("Current Queue:", this.items);
    }
}

const queue = new Queue<string>();

queue.enqueue("first");
queue.enqueue("second");
queue.enqueue("third");
queue.printQueue();

console.log("Front of queue:", queue.front());

queue.dequeue();
queue.printQueue();

queue.dequeue();
queue.dequeue();
queue.dequeue();
