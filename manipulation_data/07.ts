//Dado um array de produtos e um array com atualizações (com id e novo preço), 
//escreva uma função que aplique essas atualizações e retorne o array final de produtos com os preços atualizados.

type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
};


const products: Product[] = [
    { id: 1, name: "Apple", price: 1.2, category: "Fruits" },
    { id: 2, name: "Banana", price: 0.5, category: "Fruits" },
    { id: 3, name: "Carrot", price: 0.8, category: "Vegetables" },
    { id: 4, name: "Broccoli", price: 1.5, category: "Vegetables" },
    { id: 5, name: "Chicken", price: 5.0, category: "Meat" },
    { id: 6, name: "Beef", price: 7.0, category: "Meat" }
];

async function updateProducts(products: Product[], updates: { id: number, newPrice: number }) {
    const product = products.map(product => {
        if (product.id === updates.id) {
            product.price = updates.newPrice
        }
    });

    return products.filter(product => product.id === updates.id);
}

console.log(products[0])
console.log(updateProducts(products, { id: 1, newPrice: 1.5 }))
