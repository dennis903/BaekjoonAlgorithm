const { exit } = require("process");

let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((e) => +e);

const virus = [];

const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let map = [];
let max = 0;

for (let i = 0; i < N; i++) {
  const contents = input
    .shift()
    .split(" ")
    .map((e) => +e);
  map.push(contents);
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 2) virus.push([i, j]);
  }
}

const backtracking = (depth) => {
  if (depth === 3) {
    bfs();
    return;
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 0) {
        map[i][j] = 1;
        backtracking(depth + 1);
        map[i][j] = 0;
      }
    }
  }
};

const bfs = () => {
  let visited = JSON.parse(JSON.stringify(map));
  let area = 0;
  const queue = [];
  for (index of virus) queue.push(index);
  while (queue.length) {
    const [currY, currX] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [currY + direction[i][0], currX + direction[i][1]];
      if (ny < 0 || ny >= N || nx < 0 || nx >= M) continue;
      if (visited[ny][nx] !== 0) continue;
      visited[ny][nx] = 2;
      queue.push([ny, nx]);
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (visited[i][j] === 0) area++;
    }
  }
  if (area > max) max = area;
};

backtracking(0);

console.log(max);
