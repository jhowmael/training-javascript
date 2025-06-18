/*
1. Array.from
O que é?
É um método estático que cria um novo array a partir de um objeto "iterável" ou "array-like".
*/

console.log(Array.from("foo"));

const set = new Set(["foo", "bar", "baz", "foo"]);

console.log(set);

console.log(Array.from(set)); 

console.log(Array.from(set, a => a + "!!!")); 