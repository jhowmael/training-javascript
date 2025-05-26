/* Exercício 5: Encontra o maior número em um array.
Escreva uma função que recebe um array de números e retorna o maior valor.*/

function getBiggestNumber(a:number[]): number{
    var biggestNumber: number = a[0];
    
   a.forEach((numero, index) => {
        if(numero > biggestNumber){
            biggestNumber = numero
        }
    });

    return biggestNumber
}

console.log(getBiggestNumber([1, 2 ,3])); 
console.log(getBiggestNumber([8, 3 ,2])); 
console.log(getBiggestNumber([9, 9 ,2])); 
