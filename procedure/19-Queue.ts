/* Exercício 19: Implementa um sistema de filas.
Escreva funções para adicionar, remover e consultar elementos em uma fila.*/

class Queue<T> {
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    peek(): T | undefined {
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek());    // 1
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.isEmpty()); // false
