/* Exercício 14: Conta a frequência de cada elemento em um array.
Escreva uma função que conta quantas vezes cada elemento aparece em um array.*/

function countFrequency(arr: any[]): Record<string, number> {
    return arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);
}

console.log(countFrequency([1, 2, 2, 3, 4, 4, 5]));
console.log(countFrequency(['a', 'b', 'a', 'c', 'b']));
console.log(countFrequency([true, false, true, true]));
