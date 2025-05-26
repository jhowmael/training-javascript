/* Exercício 8: Gera a sequência de Fibonacci até um certo número de termos.
Escreva uma função que gera um array com a sequência de Fibonacci até N termos. */

function getFibonacciSequence(a:number): number[]{
    var sequence: number[] = [0];

    for (let i = 1; i < a; i++) {
        if(i === 1){
            sequence[i] = 1;
        }else{
            sequence[i] = sequence[i - 1] + sequence[i - 2];
        }
    }

    return sequence
}

console.log(getFibonacciSequence(3)); 
console.log(getFibonacciSequence(5)); 
console.log(getFibonacciSequence(10)); 
