const [A, B] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => +e);

const first = Math.floor(B / 100);
const second = Math.floor((B % 100) / 10);
const third = (B % 100) % 10;

console.log(third * A);
console.log(second * A);
console.log(first * A);
console.log(A * B);
