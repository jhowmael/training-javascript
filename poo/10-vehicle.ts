/* Exercício 10: Crie uma classe abstrata Veiculo.
Inclua um método abstrato mover.*/

export abstract class Vehicle {

    type: string;
    model: string;
    speed: number;

    constructor(type: string, model: string, speed: number) {
        this.type = type;
        this.model = model;
        this.speed = speed;
    }

    abstract move(): void; 
}
