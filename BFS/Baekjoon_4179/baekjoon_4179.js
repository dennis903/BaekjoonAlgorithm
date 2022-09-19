let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((e) => +e);

const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let result = "";

const map = input.map((e) => e.split(""));
let dist1 = Array.from(Array(N), () => Array(M).fill(-1));
let dist2 = Array.from(Array(N), () => Array(M).fill(-1));
let queue1 = [];
let queue2 = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] == "F") {
      dist1[i][j] = 0;
      queue1.push([i, j]);
    } else if (map[i][j] == "J") {
      dist2[i][j] = 0;
      queue2.push([i, j]);
    }
  }
}

while (queue1.length) {
  const [ny, nx] = queue1.shift();
  for (let i = 0; i < 4; i++) {
    const [dirY, dirX] = [ny + direction[i][0], nx + direction[i][1]];
    if (dirY < 0 || dirY >= N || dirX < 0 || dirX >= M) continue;
    if (map[dirY][dirX] == "#" || dist1[dirY][dirX] !== -1) continue;
    dist1[dirY][dirX] = dist1[ny][nx] + 1;
    queue1.push([dirY, dirX]);
  }
}

while (queue2.length) {
  let isQuit = false;
  const [ny, nx] = queue2.shift();
  for (let i = 0; i < 4; i++) {
    const [dirY, dirX] = [ny + direction[i][0], nx + direction[i][1]];
    if (dirY < 0 || dirY >= N || dirX < 0 || dirX >= M) {
      result = dist2[ny][nx] + 1;
      isQuit = true;
      break;
    }
    if (
      map[dirY][dirX] == "#" ||
      dist2[dirY][dirX] !== -1 ||
      (dist1[ny][nx] !== -1 && dist2[ny][nx] + 1 >= dist1[dirY][dirX])
    )
      continue;
    dist2[dirY][dirX] = dist2[ny][nx] + 1;
    queue2.push([dirY, dirX]);
  }
  if (isQuit) break;
}

if (result == "") result = "IMPOSSIBLE";

console.log(result);
