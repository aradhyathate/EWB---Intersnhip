const catalog = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 }
];

console.log("-- All Products (forEach) --");
catalog.forEach((item) => {
  console.log(`Item: ${item.name} - Price: $${item.price}`);
});

const affordableItems = catalog.filter((item) => item.price < 50);
console.log("\n-- Filtered Products (Price < $50) --");
console.log(affordableItems);

const tags = catalog.map((item) => `${item.name.toUpperCase()} costs $${item.price}`);
console.log("\n-- Mapped Product Tags (map) --");
console.log(tags);