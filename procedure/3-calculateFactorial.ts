/* Exercício 3: Calcula o fatorial de um número.
Escreva uma função que calcula o fatorial de um número de forma recursiva.*/

function calculateFatorial(a:number): number{
    if (a === 0 || a === 1) {
        return 1;
    } else {
        return a * calculateFatorial(a - 1); 
    }
}

console.log(calculateFatorial(3)); 
console.log(calculateFatorial(8)); 
console.log(calculateFatorial(20)); 
