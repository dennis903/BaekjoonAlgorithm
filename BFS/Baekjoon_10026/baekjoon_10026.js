let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const map = [];
input.map((e) => {
  const newArr = e.split("");
  map.push(newArr);
});

const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
