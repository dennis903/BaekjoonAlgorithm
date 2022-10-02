let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const arr = input.shift().split(" ");

const visited = Array(10).fill(false);
const pick = [];
let max = 0;
let min = Infinity;
let maxResult = "";
let minResult = "";

const backtracking = (depth) => {
  if (depth === N + 1) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === ">") if (pick[i] < pick[i + 1]) return;
      if (arr[i] === "<") if (pick[i] > pick[i + 1]) return;
    }
    if (max < +pick.join("")) {
      max = +pick.join("");
      maxResult = pick.join("");
    }
    if (min > +pick.join("")) {
      min = +pick.join("");
      minResult = pick.join("");
    }
    return;
  }
  for (let i = 0; i < 10; i++) {
    if (!visited[i]) {
      visited[i] = true;
      pick.push(i);
      backtracking(depth + 1);
      pick.pop();
      visited[i] = false;
    }
  }
};

backtracking(0);

console.log(maxResult + "\n" + minResult);
