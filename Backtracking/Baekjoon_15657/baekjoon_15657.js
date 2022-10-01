let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((e) => +e);

const arr = input
  .shift()
  .split(" ")
  .map((e) => +e)
  .sort((a, b) => a - b);

const pick = [];
let result = "";
const backtracking = (input, depth) => {
  if (depth === M) {
    result += `${pick.join(" ")}\n`;
    return;
  }
  for (let i = input; i < N; i++) {
    pick.push(arr[i]);
    backtracking(i, depth + 1);
    pick.pop();
  }
};

backtracking(0, 0);
console.log(result);
