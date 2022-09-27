const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = input.map((i) => i.trim().split("").map(Number));

const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const visited = new Array(N);

for (let i = 0; i < N; i++) {
  visited[i] = new Array(M);
  for (let j = 0; j < M; j++) {
    visited[i][j] = new Array(2).fill(0);
  }
}

const bfs = () => {
  const queue = [];
  queue.push([[0, 0], 1]);
  visited[0][0][1] = 1;
  while (queue.length) {
    const [[curY, curX], block] = queue.pop();
    if (curY === N - 1 && curX === M - 1) return visited[curY][curX][block];
    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [curY + direction[i][0], curX + direction[i][1]];
      if (ny >= 0 && ny < N && nx >= 0 && nx < M) {
        if (map[ny][nx] === 1 && block) {
          visited[ny][nx][block - 1] = visited[curY][curX][block] + 1;
          queue.push([[ny, nx], block - 1]);
        }
        if (map[ny][nx] === 0 && visited[ny][nx][block] === 0) {
          visited[ny][nx][block] = visited[curY][curX][block] + 1;
          queue.push([[ny, nx], block]);
        }
      }
    }
  }
  return -1;
};

console.log(bfs());
