//Dado um array de usuários contendo nome, idade e status (ativo ou inativo),
//escreva uma função que retorne os nomes dos usuários ativos com mais de 30 anos.

type person = {
    name: string;
    year: number;
    status: string;
};

const people: person[] = [
    { name: "Jonatan", year: 24, status: "active" },
    { name: "Juliane", year: 22, status: "inactive" },
    { name: "Ana", year: 29, status: "active" },
    { name: "Pedro", year: 34, status: "active" },
    { name: "Marcia", year: 46, status: "active" },
    { name: "Nivaldo", year: 50, status: "inactive" },
];


function findPersonsByYearAndStatys(people: person[], year: number, status: string) {
    return people.filter(person => person.year > year && person.status === status).map(person => person.name);
}

console.log(findPersonsByYearAndStatys(people, 30, "active"));