//Dada uma string com várias palavras separadas por espaço, crie uma função que conte quantas vezes cada palavra aparece.
//retorne um objeto onde a chave é a palavra e o valor é a quantidade de vezes que ela aparece.

type person = {
  name: string;
};  

const people: person[] = [
    { name: "Jonatan"},
    { name: "Juliane"},
    { name: "Ismael"},
    { name: "Ana"},
    { name: "Pedro"},
    { name: "Juliane"},
    { name: "Ismael"},
];

function agrupePersonName(people: person[]) {
    const groupedNames = people.reduce((groupedNames, person) => {
        const name = person.name;
        if (groupedNames[name]){
            groupedNames[name] += 1;
        }else {
            groupedNames[name] = 1;
        }
        return groupedNames
    }, {} as Record<string, number>);
    return groupedNames;
}

console.log(agrupePersonName(people));  