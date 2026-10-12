const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

console.log("--- Initializing Inventory System ---");

function promptNewProduct() {
  let productName = "";
  let productPrice = NaN;

  while (true) {
    const inputName = prompt('Enter new product name (e.g. "Monitor"):', "Monitor");

    if (!inputName || inputName.trim() === "") {
      alert("Product name cannot be empty. Try again.");
      continue;
    }

    const inputPriceRaw = prompt(`Enter price for "${inputName}":`, "150");
    const parsedPrice = Number(inputPriceRaw);

    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      alert("Please enter a valid positive number for price.");
      continue;
    }

    productName = inputName.trim();
    productPrice = parsedPrice;
    break; 
  }

  return { name: productName, price: productPrice };
}

const newProduct = promptNewProduct();
inventory.push(newProduct);
console.log(`[Prompt executed: User adds "${newProduct.name}" at "$${newProduct.price}"]\n`);

const getProductBadge = (price) => {
  let tier = "";

  if (price >= 500) {
    tier = "TIER_A";
  } else if (price >= 100) {
    tier = "TIER_B";
  } else {
    tier = "TIER_C";
  }

  switch (tier) {
    case "TIER_A":
      return "Premium";
    case "TIER_B":
      return "Standard";
    case "TIER_C":
    default:
      return "Budget";
  }
};

console.log("--- Processing Inventory Roster (forEach) ---");
inventory.forEach((item) => {
  const badge = getProductBadge(item.price);
  console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${badge}`);
});

const calculateTotalValue = (items) => {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
};

const totalInventoryValue = calculateTotalValue(inventory);

const affordableItems = inventory
  .filter((item) => item.price < 200)
  .map((item) => item.name);

const formattedReports = inventory.map(
  (item) => `${item.name.toUpperCase()}: $${item.price}`
);

console.log("\n--- Financial Analytics ---");
console.log(`Total Inventory Value: $${totalInventoryValue}`);
console.log(`Filtered Affordable Items (Under $200):`, affordableItems);
console.log(`Formatted Report List:`, formattedReports);