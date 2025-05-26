/* Exercício 8: Crie uma classe Circulo.
Inclua métodos para calcular a área e a circunferência.*/

class Circle {
    ray: number = 0;

    constructor(ray: number) {
        this.ray = ray;
    }

    getCircleArea(): number {
        return 2 * Math.PI * this.ray
    }

    displayInformations(): void {
        console.log(`ray: ${this.ray}`);
        console.log(`Perimeter: ${(this.getCircleArea())}`);
    }
}

const circle = new Circle(10);
circle.displayInformations();

export {};