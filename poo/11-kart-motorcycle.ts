/* Exercício 11: Crie subclasses Carro e Moto que herdam de Veiculo.
Implemente o método mover em cada uma.*/

import { Vehicle } from './10-vehicle.js';

class Kart extends Vehicle {

  constructor() {
    super('Honda', 'Accord', 600);
  }

   move(): void {
    console.log(`${this.model} is moving at ${this.speed} km/h`);
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super('Honda', 'Fan', 125);
  }

   move(): void {
    console.log(`${this.model} is moving at ${this.speed} km/h`);
  }
}

const kart = new Kart();
kart.move();


const motorcycle = new Motorcycle();
motorcycle.move();

