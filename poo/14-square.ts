/* Exercício 14: Implemente a interface FormaGeometrica em uma classe Quadrado.
Implemente os métodos exigidos.*/

import { GeometricShape } from './13-rectangle-circle.js';

class Square implements GeometricShape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const square = new Square(7, 8);
console.log('Square - Area:', square.calculateArea());
console.log('Square - Perimeter:', square.calculatePerimeter());
