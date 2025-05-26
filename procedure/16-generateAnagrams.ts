/* Exercício 16: Gera todos os anagramas possíveis de uma palavra.
Escreva uma função que retorna todas as permutações possíveis de uma string.*/

function generateAnagrams(str: string): string[] {
    if (str.length <= 1) return [str];
    const anagrams: string[] = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remaining = str.slice(0, i) + str.slice(i + 1);
        for (const subAnagram of generateAnagrams(remaining)) {
            anagrams.push(char + subAnagram);
        }
    }
    return Array.from(new Set(anagrams));
}

console.log(generateAnagrams("abc"));
