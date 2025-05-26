/* Exercício 10: Inverte uma string.
Escreva uma função que recebe uma string e retorna ela invertida.*/

function getReverseString(a:string): string{
    return a.split('').reverse().join('');
}

console.log(getReverseString('pedro')); 
console.log(getReverseString('jordan')); 
console.log(getReverseString('rosana')); 