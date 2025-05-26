/* Exercício 7: Conta quantas vogais há em uma string.
Escreva uma função que recebe uma string e retorna a quantidade de vogais nela.*/

function countVowels(a: string): number {
    var totalVowels: number = 0
    const lattersArray: string[] = a.split('');

    lattersArray.forEach((latter) => {
        switch (latter) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                totalVowels++;
                break;
            default:
                break;
        }
    });

    return totalVowels;
}

console.log(countVowels('ismael'));
console.log(countVowels('juliane'));
console.log(countVowels('pedro')); 