let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

let stars = "";

for (let i = input; i > 0; i--) {
  for (let j = 0; j < i; j++) stars += "*";
  if (i !== 1) stars += "\n";
}

console.log(stars);
