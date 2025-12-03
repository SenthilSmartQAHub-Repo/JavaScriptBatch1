


const prompt = require('prompt-sync')();
let i = Number(prompt(`Enter the value: \n`));

if (isNaN(i)) {
  console.log("Please enter a numeric value only!");
} else {
  do {
    console.log(`i value is ${i}`);
    i++;
  } while (i <= 5);
}
