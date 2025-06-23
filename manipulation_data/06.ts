/*
Dado um array de objetos representando categorias e seus subitens:

ts
Copiar
Editar
[
  { categoria: "Frutas", itens: ["Maçã", "Banana"] },
  { categoria: "Legumes", itens: ["Cenoura", "Beterraba"] }
]
Crie uma função que transforme esse array em um único array com todos os itens, independentemente da categoria.
*/

type Item = {
  name: string;
  price: number;
};

type Category = {
  category: string;
  items: Item[];
};

const items = [
  {
    category: "Fruits",
    items: [
      { name: "apple", price: 3},
      { name: "Banana", price: 2 },
      { name: "Orange", price: 4 },  
    ],
  },  
  {
    category: "Vehicles",
    items: [
      { name: "Motorcycle", price: 8000},
      { name: "Car", price: 18000 },
    ],
  },  
  {
    category: "Computers",
    items: [
      { name: "Mouse", price: 30},
      { name: "Keyboard", price: 60 },
      { name: "Headphones", price: 250 },  
    ],
  },  
]

async function unifiedItems(items: Category[]){
  return items.flat().map((category) => category.items)
    .flat(1);
}

console.log(unifiedItems(items));