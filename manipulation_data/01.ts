//Dado um array de produtos com nome, preço e categoria, escreva uma função que agrupe os produtos por categoria,
//retornando um objeto onde as chaves são os nomes das categorias e os valores são arrays com os produtos correspondentes.

import { group } from "console";

type Product = {
  name: string;
  price: number;
  category: string;
};  


const products: Product[] = [
    { name: "Apple", price: 1.2, category: "Fruits" },
    { name: "Banana", price: 0.5, category: "Fruits" },
    { name: "Carrot", price: 0.8, category: "Vegetables" },
    { name: "Broccoli", price: 1.5, category: "Vegetables" },
    { name: "Chicken", price: 5.0, category: "Meat" },
    { name: "Beef", price: 7.0, category: "Meat" }
];

async function groupProductsByCategory(products: Product[]) {
const grouped: { [key: string]: Product[] } = {};

products.forEach((product) => {
  if(!grouped[product.category]){
    grouped[product.category] = [product];
  }
  else {
    grouped[product.category].push(product);
  }
});

return grouped["Fruits"];
}

console.log(groupProductsByCategory(products))