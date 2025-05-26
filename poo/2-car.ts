/* Exercício 2: Crie uma classe Carro.
A classe deve ter propriedades modelo, ano e um método para exibir os dados do carro.*/

class Car {
  model: string;
  year: number;

  constructor(model: string, year: number) {
    this.model = model;
    this.year = year;
  }

  displayInformation(): void {
    console.log(`model: ${this.model}, year: ${this.year}`);
  }
}

const car = new Car('chevrolet', 25);
car.displayInformation();
