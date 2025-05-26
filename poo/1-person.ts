/* Exercício 1: Crie uma classe Pessoa.
A classe deve ter as propriedades name e year, além de um método que exiba essas informações.*/

export class Person {
  name: string;
  year: number;

  constructor(name: string, year: number) {
    this.name = name;
    this.year = year;
  }

  displayInformation(): void {
    console.log(`name: ${this.name}, year: ${this.year}`);
  }

  hello(): void {
    console.log(`Hello, my name is ${this.name} i have ${this.year} years!`);
  }
}

const person = new Person('Pedro', 25);
person.displayInformation();
person.hello();
