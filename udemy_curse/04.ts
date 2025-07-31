//Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string.
//Por exemplo, se a entrada for 2, a função deverá retornar 'fevereiro', pois este é o 2° mês.

async function mesesDoAno(numero:number){
    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];

    return console.log("Mês correspondente: " + meses[numero])
}

mesesDoAno(1);
mesesDoAno(2);      