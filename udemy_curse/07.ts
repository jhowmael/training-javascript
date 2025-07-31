//Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo)
//e retorne se o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true,
//tenha 'entre' como inclusivo, ou seja, considerando se numero é igual a minimo ou a maximo.
//Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva,
//não considerando se numero é igual a minimo ou a maximo.

function estaEntre(numero: number, minimo: number, maximo: number, inclusivo: boolean = false): boolean {
    if (inclusivo) {
        return numero >= minimo && numero <= maximo;
    } else {
        return numero > minimo && numero < maximo;
    }
}

console.log(estaEntre(10, 5, 15));
console.log(estaEntre(10, 5, 15, true));
console.log(estaEntre(5, 5, 15)); 
console.log(estaEntre(5, 5, 15, true)); 