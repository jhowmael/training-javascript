/* Exercício 17: Implementa uma busca binária.
Escreva uma função que utiliza a busca binária para encontrar um número em um array ordenado.*/

function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9], 7));  // 3
console.log(binarySearch([1, 3, 5, 7, 9], 4));  // -1
