/* Exercício 13: Converte uma temperatura de Celsius para Fahrenheit.
Escreva uma função que converte uma temperatura dada em Celsius para Fahrenheit.*/

function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(0));    
console.log(celsiusToFahrenheit(100));  
console.log(celsiusToFahrenheit(37));   