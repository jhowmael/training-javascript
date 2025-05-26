/* Exercício 20: Implementa um algoritmo de ordenação por quicksort.
Escreva uma função que ordena um array de números utilizando o algoritmo quicksort.*/

function quicksort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = arr.slice(0, arr.length - 1).filter(x => x <= pivot);
    const right = arr.slice(0, arr.length - 1).filter(x => x > pivot);
    return [...quicksort(left), pivot, ...quicksort(right)];
}

console.log(quicksort([5, 3, 8, 4, 2]));
console.log(quicksort([10, 7, 2, 5, 9, 1]));
