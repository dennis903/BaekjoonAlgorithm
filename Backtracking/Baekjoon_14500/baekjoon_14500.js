let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((e) => +e);

const map = [];
const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
let visited = Array.from(Array(N), () => Array(M).fill(false));

for (next of input) {
  map.push(next.split(" ").map((e) => +e));
}
let max = 0;

const backtracking = (y, x, sum, depth) => {
  if (depth === 3) {
    max = Math.max(max, sum);
    return;
  }
  for (let i = 0; i < 4; i++) {
    const [ny, nx] = [y + direction[i][0], x + direction[i][1]];
    if (ny < 0 || ny >= N || nx < 0 || nx >= M) continue;
    if (visited[ny][nx] === true) continue;
    visited[ny][nx] = true;
    backtracking(ny, nx, sum + map[ny][nx], depth + 1);
    visited[ny][nx] = false;
  }
};

const shape1 = (x, y) => {
  const sum = map[y][x] + map[y][x + 1] + map[y][x + 2] + map[y - 1][x + 1];
  max = Math.max(max, sum);
};

const shape2 = (x, y) => {
  const sum = map[y][x] + map[y][x + 1] + map[y][x + 2] + map[y + 1][x + 1];
  max = Math.max(max, sum);
};

const shape3 = (x, y) => {
  const sum = map[y][x] + map[y + 1][x] + map[y + 2][x] + map[y + 1][x + 1];
  max = Math.max(max, sum);
};

const shape4 = (x, y) => {
  const sum = map[y][x] + map[y - 1][x + 1] + map[y][x + 1] + map[y + 1][x + 1];
  max = Math.max(max, sum);
};

for (let i = 0; i < N; i++) {
  visited = Array.from(Array(N), () => Array(M).fill(false));
  for (let j = 0; j < M; j++) {
    visited[i][j] = true;
    backtracking(i, j, map[i][j], 0);
    if (i - 1 >= 0 && j + 2 < M) shape1(j, i);
    if (j + 2 < M && i + 1 < N) shape2(j, i);
    if (i + 2 < N && j + 1 < M) shape3(j, i);
    if (i + 1 < N && i - 1 >= 0 && j + 1 < M) shape4(j, i);
  }
}
console.log(max);
