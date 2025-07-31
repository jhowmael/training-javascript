/*
Array.from: É um método estático que cria um novo array a partir de um objeto "iterável" ou "array-like".

Set: É uma estrutura de dados que guarda valores únicos (sem repetição). 
Para que serve?
Armazenar coleções de valores onde você não quer duplicatas.
Tem métodos para adicionar (add), remover (delete), verificar se contém um valor (has).
Iterável, pode usar for..of, forEach, etc.
*/

console.log(Array.from("foo"));

const set = new Set(["foo", "bar", "baz", "foo"]);

console.log(set);

console.log(Array.from(set)); 

console.log(Array.from(set, a => a + "!!!")); 