let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const graph = [...new Array(N + 1)].map(() => []);
const queue = [];
let check = [];
let result = "";

for (let i = 0; i < N - 1; i++) {
  const [from, to] = input
    .shift()
    .split(" ")
    .map((e) => +e);
  graph[from].push(to);
  graph[to].push(from);
}

const bfs = () => {
  check[1] = 1;
  for (let next of graph[1]) {
    check[next] = 1;
    queue.push(next);
  }
  while (queue.length) {
    const current = queue.shift();
    for (let next of graph[current]) {
      if (check[next]) continue;
      check[next] = current;
      queue.push(next);
    }
  }
};

bfs();

check = check.slice(2);
check.map((e) => (result += `${e}\n`));

console.log(result);
