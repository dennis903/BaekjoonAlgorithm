let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

let map = Array.from(Array(N), () => Array(N).fill(-1));

const [r1, c1, r2, c2] = input
  .shift()
  .split(" ")
  .map((e) => +e);

const direction = [
  [-2, -1],
  [-2, 1],
  [0, -2],
  [0, 2],
  [2, -1],
  [2, 1],
];

const queue = [];

const bfs = () => {
  queue.push([r1, c1]);
  map[r1][c1] = 0;
  while (queue.length) {
    const [curR, curC] = queue.shift();
    if (curR === r2 && curC === c2) return;
    for (let i = 0; i < 6; i++) {
      const [nr, nc] = [curR + direction[i][0], curC + direction[i][1]];
      if (nr < 0 || nr >= N || nc < 0 || nc >= N) continue;
      if (map[nr][nc] === -1) {
        queue.push([nr, nc]);
        map[nr][nc] = map[curR][curC] + 1;
      }
    }
  }
};
bfs();
console.log(map[r2][c2]);
