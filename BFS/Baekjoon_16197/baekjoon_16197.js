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
input.map((e) => {
  map.push(e.split(""));
});
const queue = [];
let visited1 = Array.from(Array(N), () => Array(M).fill(-1));
let visited2 = Array.from(Array(N), () => Array(M).fill(-1));
let count = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === "o") {
      if ((count = 0)) {
        visited1[i][j] = 0;
        count++;
      } else visited2[i][j] = 0;
      queue.push([i, j]);
    }
  }
}
let min = Infinity;

const checkRange = (y, x) => {
  if (y < 0 || y >= N || x < 0 || x >= M) return true;
  return false;
};

const backtracking = (y1, x1, y2, x2, count, dir) => {
  if (min < count) return;
  if (count > 10) {
    min = Math.min(min, count);
    return;
  }
  let [ny1, nx1] = [y1 + direction[dir][0], x1 + direction[dir][1]];
  let [ny2, nx2] = [y2 + direction[dir][0], x2 + direction[dir][1]];
  if (checkRange(ny1, nx1) && checkRange(ny2, nx2)) return;
  else if (checkRange(ny1, nx1) || checkRange(ny2, nx2)) {
    min = Math.min(min, count);
    return;
  }
  if (map[ny1][nx1] === "#") {
    ny1 = y1;
    nx1 = x1;
  }
  if (map[ny2][nx2] === "#") {
    ny2 = y2;
    nx2 = x2;
  }
  for (let i = 0; i < 4; i++) {
    backtracking(ny1, nx1, ny2, nx2, count + 1, i);
  }
};

for (let i = 0; i < 4; i++) {
  backtracking(queue[0][0], queue[0][1], queue[1][0], queue[1][1], 1, i);
}

if (min > 10) min = -1;

console.log(min);
