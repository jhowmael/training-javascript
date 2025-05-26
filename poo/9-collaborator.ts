/* Exercício 9: Crie uma classe Funcionario.
Inclua um método que calcule o salário anual baseado no salário mensal.*/

import { Person } from './1-person.js';

class Collaborator extends Person {

    salary: number;

    constructor(salary: number) {
        super('Ismael', 24);
        this.salary = salary;
    }

    getAnnualSalary(): number {
        return this.salary * 12
    }

    displayInformations(): void {
        console.log(`Salary: ${this.salary}`);
        console.log(`Annual Salary: ${(this.getAnnualSalary())}`);
    }
}

const collaborator = new Collaborator(1500);
collaborator.displayInformations();