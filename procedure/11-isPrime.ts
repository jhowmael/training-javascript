/* Exercício 11: Verifica se um número é primo.
Escreva uma função que determina se um número é primo.*/

function isPrime(n: number): boolean {
    if (n < 2) {
        return false;  
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;  
        }
    }

    return true;  
}

console.log(isPrime(2));   
console.log(isPrime(4));   
console.log(isPrime(7));   
