/* Exercício 4: Crie uma subclasse Cachorro que herda de Animal.
Sobrescreva o método fazerSom para exibir 'Au Au'.
*/

import { Animal } from './3-animal.js';

class Dog extends Animal {

  constructor() {
    super('Dog', 'Au Au!');
  }
  
}

const dog = new Dog();
dog.displayInSound(); 