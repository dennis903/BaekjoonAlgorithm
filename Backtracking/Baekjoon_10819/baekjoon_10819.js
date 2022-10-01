const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const arr = input
  .shift()
  .split(" ")
  .map((e) => +e);

const check = Array(N).fill(false);
const pick = [];
let max = -100;

const backtracking = (depth) => {
  if (depth === N) {
    let sum = 0;
    for (let i = 0; i < N - 1; i++) {
      sum += Math.abs(pick[i] - pick[i + 1]);
    }
    max = Math.max(sum, max);
  }
  for (let i = 0; i < N; i++) {
    if (check[i] === false) {
      check[i] = true;
      pick.push(arr[i]);
      backtracking(depth + 1);
      pick.pop();
      check[i] = false;
    }
  }
};

backtracking(0);

console.log(max);
