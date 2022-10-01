const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const check = Array(N + 1).fill(false);
const pick = [];
let result = "";
const backtracking = (depth) => {
  if (depth === N) {
    result += `${pick.join(" ")}\n`;
    return;
  }
  for (let i = 1; i <= N; i++) {
    if (!check[i]) {
      check[i] = true;
      pick.push(i);
      backtracking(depth + 1);
      pick.pop();
      check[i] = false;
    }
  }
};

backtracking(0);

console.log(result);
