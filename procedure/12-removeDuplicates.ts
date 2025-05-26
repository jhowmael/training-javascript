/*Exercício 12: Remove elementos duplicados de um array.
Escreva uma função que remove todos os elementos duplicados de um array.*/

function removeDuplicates(arr: any[]): any[] {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b']));
console.log(removeDuplicates([true, false, true, true]));
