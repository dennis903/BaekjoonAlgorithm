const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((e) => +e);

const map = [];
const chicken = [];
const house = [];
const target = [];
let result = Infinity;

while (input.length) {
  const tmpArr = input
    .shift()
    .split(" ")
    .map((e) => +e);
  map.push(tmpArr);
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1) house.push([i, j]);
    else if (map[i][j] === 2) chicken.push([i, j]);
  }
}

let check = Array(chicken.length).fill(false);

const backtracking = (index, depth) => {
  if (depth === M) {
    let sum = 0;
    for (next1 of house) {
      let min = Infinity;
      for (next2 of target) {
        min = Math.min(
          min,
          Math.abs(next1[0] - next2[0]) + Math.abs(next1[1] - next2[1])
        );
      }
      sum += min;
    }
    result = Math.min(sum, result);
    return;
  }
  for (let i = index; i < chicken.length; i++) {
    if (check[i] === true) continue;
    check[i] = true;
    target.push(chicken[i]);
    backtracking(i + 1, depth + 1);
    target.pop();
    check[i] = false;
  }
};
backtracking(0, 0);
console.log(result);
