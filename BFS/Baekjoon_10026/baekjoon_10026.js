let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const map = [];

const visited1 = Array.from(Array(N), () => Array(N).fill(false));
const visited2 = Array.from(Array(N), () => Array(N).fill(false));
let count1 = 0;
let count2 = 0;
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

const bfs = (isBlind, y, x, color) => {
  const queue = [];

  queue.push([y, x]);
  while (queue.length) {
    const [curY, curX] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [curY + direction[i][0], curX + direction[i][1]];
      if (ny < 0 || ny >= N || nx < 0 || nx >= N) continue;
      if (isBlind) {
        if (visited2[ny][nx] === true) continue;
        if ((map[ny][nx] === "R" || map[ny][nx] === "G") && color === "B")
          continue;
        if (map[ny][nx] === "B" && (color === "R" || color === "G")) continue;
        queue.push([ny, nx]);
        visited2[ny][nx] = true;
      } else {
        if (visited1[ny][nx] === true) continue;
        if (map[ny][nx] !== color) continue;
        queue.push([ny, nx]);
        visited1[ny][nx] = true;
      }
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited1[i][j]) {
      count1++;
      bfs(false, i, j, map[i][j]);
    }
    if (!visited2[i][j]) {
      count2++;
      bfs(true, i, j, map[i][j]);
    }
  }
}

console.log(count1, count2);
