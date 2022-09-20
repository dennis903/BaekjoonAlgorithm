let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, K] = input
  .shift()
  .split(" ")
  .map((e) => +e);

const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
let map = Array.from(Array(N), () => Array(M).fill(0));
let count = 0;
const areas = [];

const bfs = (y, x) => {
  const queue = [];
  let area = 1;
  map[y][x] = 1;
  queue.push([y, x]);
  while (queue.length) {
    const [ny, nx] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [dirY, dirX] = [ny + direction[i][0], nx + direction[i][1]];
      if (dirY < 0 || dirY >= N || dirX < 0 || dirX >= M) continue;
      if (map[dirY][dirX] == -1 || map[dirY][dirX] !== 0) continue;
      queue.push([dirY, dirX]);
      area++;
      map[dirY][dirX] = area;
    }
  }
  areas.push(area);
};

for (let i = 0; i < K; i++) {
  const [ax, ay, bx, by] = input
    .shift()
    .split(" ")
    .map((e) => +e);
  for (let y = 0; y < N; y++)
    for (let x = 0; x < M; x++)
      if (x >= ax && x < bx && y >= ay && y < by) map[y][x] = -1;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] == 0) {
      count++;
      bfs(i, j);
    }
  }
}

console.log(count);
console.log(...areas.sort((a, b) => a - b));
