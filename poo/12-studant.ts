/* Exercício 12: Crie uma classe Estudante.
Inclua métodos para calcular a média das notas e verificar se o estudante foi aprovado.*/

import { Person } from './1-person.js';

class Studant extends Person {

    mat: number;
    port: number;
    eng: number;
    art: number;
    average: number = 0;
    approved: boolean = false;

    constructor(mat: number, port: number, eng: number, art: number) {
        super('Ismael', 24);
        this.mat = mat;
        this.port = port;
        this.eng = eng;
        this.art = art;
    }

    getAverage(): number {
        this.average = (this.mat + this.port + this.eng + this.art) / 4;
        return this.average;
    }

    isApproved(): boolean {
        this.approved = this.getAverage() >= 7;
        return this.approved;
    }

    displayInformations(): void {
        console.log(`Average Points: ${this.getAverage()}`);
        console.log(`Approved: ${this.isApproved()}`);
    }
}

const studant = new Studant(5, 8, 5, 6);
studant.displayInformations();
