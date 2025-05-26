/* Exercício 6: Crie uma classe Produto.
Inclua propriedades nome, preço e um método que calcule o preço com desconto.*/

class Product {
    name: string = '';
    value: number = 0;
    discount: number = 0;

    constructor(name: string, value: number, discount: number) {
        this.name = name;
        this.value = value;
        this.discount = discount;

    }

    getValueWithDiscount(): number {
        return (this.value - (this.discount / 100) * this.value);
    }

    displayInformations(): void {
        console.log(`Product: ${this.name}`);
        console.log(`Value: ${this.value}`);
        console.log(`Value with discount: ${(this.getValueWithDiscount())}`);
    }
}


const product = new Product('arroz', 100, 20);
product.displayInformations();


