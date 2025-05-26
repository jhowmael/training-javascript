/* Exercício 13: Crie uma interface FormaGeometrica.
Inclua métodos para calcular área e perímetro.*/

export interface GeometricShape {
  calculateArea(): number;
  calculatePerimeter(): number;
}

class Rectangle implements GeometricShape {
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

class Circle implements GeometricShape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

const rectangle = new Rectangle(5, 10);
console.log('Rectangle - Area:', rectangle.calculateArea());
console.log('Rectangle - Perimeter:', rectangle.calculatePerimeter());

const circle = new Circle(7);
console.log('Circle - Area:', circle.calculateArea());
console.log('Circle - Perimeter:', circle.calculatePerimeter());
