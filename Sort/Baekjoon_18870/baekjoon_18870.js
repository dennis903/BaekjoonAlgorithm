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
const set = new Set([...arr].sort((a, b) => a - b));
const sortedArr = [...set];
const obj = {};
sortedArr.map((e, i) => (obj[e] = i));
const result = arr.map((e) => obj[e]);
console.log(...result);
