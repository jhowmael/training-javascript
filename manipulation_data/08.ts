//Escreva uma função que, dada uma lista de palavras, 
//retorne um array de arrays, agrupando palavras que são anagramas entre si.

type word = {
    text: string;
};

const words: word[] = [
    { text: "amor" },
    { text: "Gato" },
    { text: "roma" },
    { text: "Caramujo" },
    { text: "omar" },
    { text: "Rato" },
    { text: "Macaco" },
];

function agruppedWordsByAnagrams(words: word[]) {
    const anagramGroups: Record<string, string[]> = {};

    for (const word of words) {
        const key = word.text.toLowerCase().split("").sort().join("");

        if (!anagramGroups[key]) {
            anagramGroups[key] = [];
        }
        anagramGroups[key].push(word.text);
    }

    return Object.values(anagramGroups);
}

console.log(agruppedWordsByAnagrams(words));