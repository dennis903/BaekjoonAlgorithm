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

let ladders = Array(101).fill(0);
let visited = Array(101).fill(-1);

input.map((e) => {
  const [x, y] = e.split(" ").map((e) => +e);
  ladders[x] = y;
});

const queue = [];

const bfs = () => {
  queue.push(1);
  visited[1] = 0;
  while (queue.length) {
    const y = queue.shift();
    for (let i = 1; i <= 6; i++) {
      let ny = y + i;
      if (ladders[ny] !== 0) ny = ladders[ny];
      if (ny > 100) continue;
      if (visited[ny] !== -1) continue;
      visited[ny] = visited[y] + 1;
      queue.push(ny);
    }
  }
};
bfs();
console.log(visited[100]);
