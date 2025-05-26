/* Exercício 2: Verifica se um número é par ou ímpar.
Escreva uma função que recebe um número e retorna 'Par' ou 'Ímpar'.*/

function oddOrEven(a:number): string{
    if(Number.isInteger(a/2)){
        return 'Este numero é par';
    }

    return 'Este numero é impar';
}

console.log(oddOrEven(3)); 
console.log(oddOrEven(4)); 
console.log(oddOrEven(5)); 