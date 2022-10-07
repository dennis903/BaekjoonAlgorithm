let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const numArr = input
  .shift()
  .split(" ")
  .map((e) => +e);

let calcArr = input
  .shift()
  .split(" ")
  .map((e) => +e);

let max = -1000000001;
let min = Infinity;

const backtracking = (depth, add, sub, mul, div, result) => {
  if (depth === N - 1) {
    min = Math.min(min, result);
    max = Math.max(max, result);
    return;
  }
  if (add !== 0)
    backtracking(depth + 1, add - 1, sub, mul, div, result + numArr[depth + 1]);
  if (sub !== 0) {
    backtracking(depth + 1, add, sub - 1, mul, div, result - numArr[depth + 1]);
  }
  if (mul !== 0)
    backtracking(depth + 1, add, sub, mul - 1, div, result * numArr[depth + 1]);
  if (div !== 0) {
    if (result < 0) {
      result *= -1;
      result = Math.floor(result / numArr[depth + 1]);
      result *= -1;
    } else result = Math.floor(result / numArr[depth + 1]);
    backtracking(depth + 1, add, sub, mul, div - 1, result);
  }
};

backtracking(0, calcArr[0], calcArr[1], calcArr[2], calcArr[3], numArr[0]);
console.log(max + "\n" + min);
