const isBelowThreshold = (currentValue: number) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true

const testeValidation = (currentValue: string) => currentValue === "olá";

const arrayTeste = ["teste", "teste"];
// Expected output: false

console.log(arrayTeste.every(testeValidation));