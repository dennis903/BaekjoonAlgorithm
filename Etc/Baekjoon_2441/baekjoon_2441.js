let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => +e);

let str = "";

for (let i = input; i > 0; i--) {
  for (let j = 0; j < input - i; j++) str += " ";
  for (let k = 0; k < i; k++) str += "*";
  if (i !== 1) str += "\n";
}

console.log(str);
