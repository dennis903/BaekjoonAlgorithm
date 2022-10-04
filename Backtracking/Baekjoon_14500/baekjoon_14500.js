let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((e) => +e);

const map = [];

for (next of input) {
  map.push(next.split(" ").map((e) => +e));
}
let min = Infinity;

const backtracking = (y, x, depth) => {
  if (depth === 1) {
  }
  for (let i = y; i < N; i++) {
    for (let j = x; j < N; j++) {}
  }
};
