//Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias."

async function idadeEmDias(nome: string, anoNascimento: number) {
    return console.log("Olá " + nome + " Sua idade em dias: " + (anoNascimento * 365));
}

idadeEmDias("Jonatan", 24);
idadeEmDias("Juliane", 23);