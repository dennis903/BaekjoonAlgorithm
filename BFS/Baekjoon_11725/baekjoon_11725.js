let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const queue = [];
let check = [];
let result = "";

input = input.map((v) => v.split(" ").map(Number));
let graph = Array.from({ length: +N + 1 }, () => Array());
for (let [x, y] of input) {
  graph[x].push(y);
  graph[y].push(x);
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
