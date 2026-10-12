function calculateStandardArea(length = 5, width = 4) {
  var internalNotes = "standard area computed";
  return length * width;
}

const calculateArrowArea = (length = 5, width = 4) => length * width;

console.log(`Standard Function Area (Default 5x4): ${calculateStandardArea()}`);
console.log(`Arrow Function Area (Custom 10x3): ${calculateArrowArea(10, 3)}`);

{
  let blockVar = "I live only inside this block";
  const blockConst = 42;
}

try {
  console.log(blockVar);
} catch (err) {
  console.log(`Scope Test Error: ${err.name}: ${err.message} (when accessed outside block)`);
}