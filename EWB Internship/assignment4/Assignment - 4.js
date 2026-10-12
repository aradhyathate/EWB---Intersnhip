console.log("-- Multiplication Table of 5 --");
for (let i = 1; i <= 5; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

console.log("\n-- First number > 10 divisible by 6 --");
let candidate = 11;
while (true) {
  if (candidate % 6 === 0) {
    console.log(`Found: ${candidate}`);
    break;
  }
  candidate++;
}

let counter = 0;
do {
  counter++;
  if (counter % 2 !== 0) {
    continue; 
  }
}
while (counter < 6);