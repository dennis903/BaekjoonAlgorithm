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
let check = Array(arr.length).fill(false);
let result = "";

const backtracking = (depth) => {
  if (depth === M) {
    result += `${pick.join(" ")}\n`;
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (check[i] === true) continue;
    check[i] = true;
    pick.push(arr[i]);
    backtracking(depth + 1);
    pick.pop();
    check[i] = false;
  }
};

backtracking(0);

console.log(result);
