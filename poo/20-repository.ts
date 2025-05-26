/* Exercício 20: Crie uma classe Genérica Repositorio<T>.
Ela deve permitir adicionar, remover e listar elementos de qualquer tipo.*/

class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
        console.log(`Item added.`);
    }

    remove(item: T): void {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
            console.log(`Item removed.`);
        } else {
            console.log(`Item not found.`);
        }
    }

    list(): T[] {
        return this.items;
    }
}

const repo = new Repository<number>();
repo.add(1);
repo.add(2);
console.log(repo.list());
repo.remove(1);
console.log(repo.list());
