let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((e) => +e);

const graph = [...Array(N + 1)].map(() => []);
const result = Array(N).fill(0);
for (let i = 0; i < M; i++) {
  const [from, to] = input
    .shift()
    .split(" ")
    .map((e) => +e);
  graph[from].push(to);
  graph[to].push(from);
}

const bfs = (target) => {
  const queue = [];
  const visited = Array(N + 1).fill(-1);
  queue.push(target);
  visited[target] = 0;
  while (queue.length) {
    const cur = queue.shift();
    for (next of graph[cur]) {
      if (visited[next] !== -1) continue;
      queue.push(next);
      visited[next] = visited[cur] + 1;
    }
  }
  result[target - 1] = visited.reduce((sum, curr) => sum + curr);
};

for (let i = 1; i <= N; i++) {
  bfs(i);
}

const minIndex = result.findIndex((e) => e == Math.min(...result));

console.log(minIndex + 1);
