//Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) 
//e realize a multiplicação deles. Porém, não utilize o operador de multiplicação.

function multiplicar(a: number, b: number): number {
    if (a < 0 || b < 0) {
        throw new Error("Os números devem ser não negativos.");
    }
    
    let resultado = 0;
    
    for (let i = 0; i < b; i++) {
        resultado += a;
    }
    
    return resultado;
}

console.log(multiplicar(5, 3));
console.log(multiplicar(0, 10));
console.log(multiplicar(7, 0));
console.log(multiplicar(4, 6));
console.log(multiplicar(10, 10)); 