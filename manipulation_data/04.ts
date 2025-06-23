//Dado um objeto onde as chaves são nomes de países e os valores são suas populações,
//crie uma função que retorne um array de objetos com pais e populacao, ordenado da maior para a menor população.

type country = {
    name: string;
    population: number;
};  

const countries: country[] = [
    { name: "Brasil", population: 30000000 },
    { name: "Argentina", population: 20000000 },
    { name: "Uruguai", population: 10000000 },
    { name: "Portugual", population: 30000000 },
    { name: "França", population: 30000000 },
    { name: "India", population: 50000000 },
    { name: "China", population: 60000000 },
];


function orderCountriesByPopulation(countries: country[]) {
    return countries.sort((a, b) => b.population - a.population);
}

console.log(orderCountriesByPopulation(countries));