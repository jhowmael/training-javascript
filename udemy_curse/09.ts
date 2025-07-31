//Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá,
//enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.

function repetirElemento(elemento: any, vezes: number): any[] {
    if (vezes < 0) {
        throw new Error("O número de repetições não pode ser negativo.");
    }
    
    const resultado: any[] = [];
    
    for (let i = 0; i < vezes; i++) {
        resultado.push(elemento);
    }
    
    return resultado;
}
console.log(repetirElemento("a", 5));
console.log(repetirElemento(7, 3));
console.log(repetirElemento(true, 4));
console.log(repetirElemento({ nome: "João" }, 2));
console.log(repetirElemento([1, 2], 0));
