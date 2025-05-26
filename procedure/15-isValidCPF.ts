/* Exercício 15: Valida se um CPF é válido.
Escreva uma função que verifica se um CPF é válido segundo as regras brasileiras.*/

function isValidCPF(cpf: string): boolean {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    const calcDigit = (cpf: string, factor: number) => {
        let total = 0;
        for (let i = 0; i < factor - 1; i++) {
            total += parseInt(cpf.charAt(i)) * (factor - i);
        }
        const rest = (total * 10) % 11;
        return rest === 10 ? 0 : rest;
    };

    const digit1 = calcDigit(cpf, 10);
    const digit2 = calcDigit(cpf, 11);

    return digit1 === parseInt(cpf.charAt(9)) && digit2 === parseInt(cpf.charAt(10));
}

console.log(isValidCPF('12345678909')); 
console.log(isValidCPF('93541134780')); 
