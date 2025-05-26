/* Exercício 4: Verifica se uma palavra é um palíndromo.
Escreva uma função que verifica se uma string é um palíndromo.*/

function isPalindrome(a:string): string{

    if(a.split('').reverse().join('') == a){
        return 'É um palindromo'
    }

    return 'Não é um palindromo'

}

console.log(isPalindrome('ana')); 
console.log(isPalindrome('ismael')); 
console.log(isPalindrome('ovo')); 