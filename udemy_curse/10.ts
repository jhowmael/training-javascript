//Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo '+'
//na quantidade especificada no parâmetro.

function repetirSinal(quantidade: number): string {
    if (quantidade < 0) {
        throw new Error("A quantidade não pode ser negativa.");
    }
    
    let resultado = '';
    
    for (let i = 0; i < quantidade; i++) {
        resultado += '+';
    }
    
    return resultado;
}

console.log(repetirSinal(5));
console.log(repetirSinal(0));
console.log(repetirSinal(3));
console.log(repetirSinal(10));
console.log(repetirSinal(1)); 