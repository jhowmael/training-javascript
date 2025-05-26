/* Exercício 7: Crie uma classe Retangulo.
Inclua métodos para calcular a área e o perímetro.*/

class Rectangle {
    base: number = 0;
    height: number = 0;

    constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
    }

    getRectangleArea(): number {
        return this.base * this.height
    }

    getRectanglePerimeter(): number {
        return 2 * (this.base + this.height);
    }

    displayInformations(): void {
        console.log(`Base: ${this.base}`);
        console.log(`Height: ${this.height}`);
        console.log(`Area: ${(this.getRectangleArea())}`);
        console.log(`Perimeter: ${(this.getRectanglePerimeter())}`);
    }
}

const rectangle = new Rectangle(10, 20);
rectangle.displayInformations();
