const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
let result = [];
let N = 0;
let arr = [];
let ans = "";

const backtracking = (start, depth) => {
  if (depth === 6) {
    ans += `${result.join(" ")}\n`;
    return;
  }
  for (let i = start; i < N; i++) {
    result[depth] = arr[i];
    backtracking(i + 1, depth + 1);
  }
};

while (input.length !== 1) {
  arr = input
    .shift()
    .split(" ")
    .map((e) => +e);
  N = arr.shift();
  backtracking(0, 0);
  ans += "\n";
}

console.log(ans);
