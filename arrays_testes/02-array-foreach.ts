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

products.forEach((product) => {
  if (product.name === "Banana") {
    product.price = 20;
    product.category = "food";
  }
});

console.log(products);
