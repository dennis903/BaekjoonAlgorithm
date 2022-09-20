let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const [targetA, targetB] = input
  .shift()
  .split(" ")
  .map((e) => +e);
const M = +input.shift();
const dist = Array(N + 1).fill(-1);
const graph = [...new Array(N + 1)].map(() => []);

const bfs = () => {
  const queue = [];

  queue.push(targetA);
  dist[targetA] = 0;
  while (queue.length) {
    const cur = queue.shift();
    for (next of graph[cur]) {
      if (dist[next] !== -1) continue;
      dist[next] = dist[cur] + 1;
      queue.push(next);
    }
  }
};

for (let i = 0; i < M; i++) {
  const [from, to] = input
    .shift()
    .split(" ")
    .map((e) => +e);

  graph[from].push(to);
  graph[to].push(from);
}

bfs();
console.log(dist[targetB]);
