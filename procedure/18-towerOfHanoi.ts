/* Exercício 18: Resolve a Torre de Hanoi.
Escreva uma função recursiva que resolve o problema da Torre de Hanoi para N discos.*/

function towerOfHanoi(n: number, from: string, to: string, aux: string, moves: string[] = []): string[] {
    if (n === 1) {
        moves.push(`Move disk 1 from ${from} to ${to}`);
        return moves;
    }
    towerOfHanoi(n - 1, from, aux, to, moves);
    moves.push(`Move disk ${n} from ${from} to ${to}`);
    towerOfHanoi(n - 1, aux, to, from, moves);
    return moves;
}

console.log(towerOfHanoi(3, 'A', 'C', 'B'));
