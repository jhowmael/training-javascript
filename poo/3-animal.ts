/* Exercício 3: Crie uma classe Animal.
Inclua um método fazerSom que exibe um som genérico.
*/

export class Animal {
  specie: string;
  sound: string;

  constructor(specie: string, sound: string) {
    this.specie = specie;
    this.sound = sound;
  }

  displayInSound(): void {
    console.log(`${this.specie}: ${this.sound}`);
  }
}
