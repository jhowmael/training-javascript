//Crie uma função que recebe dois numeros e retorna se o primeiro é maior ou igual ao segundo.

async function compararNumeros(num1:number, num2:number) {
    if (num1 > num2) {
        return console.log("O primeiro numero: " + num1 + " É maior que o segundo numero: " + num2); 
    }else if(num1 === num2) {
        return console.log("Os numeros são iguais: " + num1 + " = " + num2);
    }

    return console.log("O primeiro numero: " + num1 + " É menor que o segundo numero: " + num2);
}

compararNumeros(1,2);
compararNumeros(2,1);   
compararNumeros(2,2);
