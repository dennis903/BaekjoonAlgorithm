let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((e) => +e);

const dist = Array(N).fill(0);

input = input.map((v) => v.split(" ").map(Number));
let graph = Array.from({ length: +N + 1 }, () => Array());
for (let [x, y] of input) {
  graph[y].push(x);
}

const bfs = (target) => {
  const queue = [];
  let count = 0;
  let visited = Array(N + 1).fill(false);
  queue.push(target);
  visited[target] = true;
  while (queue.length) {
    const curr = queue.shift();
    for (next of graph[curr]) {
      if (visited[next] === true) continue;
      visited[next] = true;
      queue.push(next);
    }
  }
  for (let i = 1; i <= N; i++) if (visited[i] === true) count++;
  dist[target] = count;
};

for (let i = 1; i <= N; i++) {
  bfs(i);
}

const max = Math.max(...dist);
const result = [];
dist.map((e, i) => {
  if (e === max) result.push(i);
});
console.log(...result);
