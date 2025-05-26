/* Exercício 6: Ordena um array de números.
Escreva uma função que recebe um array e retorna ele ordenado de forma crescente.*/

function compareNumbers(a:number, b:number) {
  return a - b;
}

function orderNumbersByBiggest(a:number[]): number[]{
    return a.sort(compareNumbers); 
}

console.log(orderNumbersByBiggest([6, 52 ,43, 22, 55, 58])); 
console.log(orderNumbersByBiggest([44, 33 ,5, 31, 8, 48])); 
console.log(orderNumbersByBiggest([11, 3 ,23, 11, 14.2, 14.1])); 