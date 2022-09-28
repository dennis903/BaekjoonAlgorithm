const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const map = input.map((e) => e.split(" ").map((v) => +v));
const visited = Array(N).fill(false);
let min = 101;

const backtracking = (idx, depth) => {
  if (depth === N / 2) {
    const stat = [];
    const link = [];
    let statSum = 0;
    let linkSum = 0;
    for (let i = 0; i < N; i++) {
      if (visited[i]) stat.push(i);
      else link.push(i);
    }
    for (let i = 0; i < N / 2; i++) {
      for (let j = i + 1; j < N / 2; j++) {
        statSum = statSum + map[stat[i]][stat[j]] + map[stat[j]][stat[i]];
        linkSum = linkSum + map[link[i]][link[j]] + map[link[j]][link[i]];
      }
    }
    min = Math.min(min, Math.abs(statSum - linkSum));
  }
  for (let i = idx; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      backtracking(i, depth + 1);
      visited[i] = false;
    }
  }
};

backtracking(0, 0);
console.log(min);
