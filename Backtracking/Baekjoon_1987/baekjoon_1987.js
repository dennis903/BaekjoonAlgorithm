const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [R, C] = input
  .shift()
  .split(" ")
  .map((e) => +e);

const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let visited = Array(21).fill(false);
let result = 0;
const map = [];
input.map((e) => map.push(e.split("")));
visited[map[0][0].charCodeAt(0)] = true;
const backtracking = (y, x, depth) => {
  let canGo = false;
  for (let i = 0; i < 4; i++) {
    const [ny, nx] = [direction[i][0] + y, direction[i][1] + x];
    if (ny < 0 || ny >= R || nx < 0 || nx >= C) continue;
    if (visited[map[ny][nx].charCodeAt(0)]) continue;
    visited[map[ny][nx].charCodeAt(0)] = true;
    canGo = true;
    backtracking(ny, nx, depth + 1);
    visited[map[ny][nx].charCodeAt(0)] = false;
  }
  if (!canGo) {
    result = Math.max(result, depth);
  }
};

backtracking(0, 0, 1);
console.log(result);
