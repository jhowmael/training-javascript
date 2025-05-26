/* Exercício 9: Calcula a média de uma lista de números.
Escreva uma função que recebe um array de números e retorna a média.*/

function countTotalAvarageValue(a: number[]): number {
    var totalValueNumbers: number = 0

    a.forEach((value) => {
        totalValueNumbers = totalValueNumbers + value;
    });


    return totalValueNumbers / a.length;
}

console.log(countTotalAvarageValue([2, 5, 3]));
console.log(countTotalAvarageValue([10, 10, 10]));
console.log(countTotalAvarageValue([10, 20, 30]));