const rawBill = prompt("Enter subtotal bill amount ($):", "100");
const rawTipPercent = prompt("Enter tip percentage (%):", "15");

const subtotal = Number(rawBill);
const tipPercent = Number(rawTipPercent);

const calculatedTip = subtotal * (tipPercent / 100);
let totalAmount = subtotal;
totalAmount += calculatedTip; 

console.log(`Subtotal: $${subtotal}`);
console.log(`Tip Percentage: ${tipPercent}%`);
console.log(`Calculated Tip: $${calculatedTip}`);
console.log(`Total Amount to Pay: $${totalAmount}`);