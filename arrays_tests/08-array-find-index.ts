//O método findIndex() de instâncias de Array retorna o índice do primeiro elemento em um array que satisfaz a função de teste fornecida. 
//Se nenhum elemento atender à função de teste, -1 será retornado.

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element: number) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3
let flags: boolean[]