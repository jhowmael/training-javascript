//O método find() de instâncias de Array retorna o primeiro elemento no array fornecido que satisfaz a função de teste fornecida.
//Se nenhum valor atender à função de teste, undefined será retornado.

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12
