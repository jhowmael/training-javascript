//Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas
//por um funcionário num mês, e o quanto ele recebe por hora. 
//O retorno da função deve ser a string 'Salário igual a R$ X', em que X é o quanto o funcionário ganhou no mês

async function salarioFuncionário(nome:string, horasTrabalhadas:number, valorHora:number) {
    const salario = horasTrabalhadas * valorHora;
    
    return console.log("Salário igual a R$ " + salario.toFixed(2) + " - Funcionário: " + nome);
}

salarioFuncionário("Jonatan", 160, 30);
salarioFuncionário("Juliane", 180, 30.00);  