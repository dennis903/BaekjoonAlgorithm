let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [A, B] = input
  .shift()
  .split(" ")
  .map((e) => +e);

const bfs = () => {
  const queue = [];
  queue.push({
    first: A,
    second: 0,
  });

  while (queue.length) {
    const curr = queue.shift();
    const [first, second] = [curr.first * 10 + 1, curr.first * 2];
    if (curr.first === B) return curr.second + 1;
    if (first <= B)
      queue.push({
        first: first,
        second: curr.second + 1,
      });
    if (second <= B) {
      queue.push({
        first: second,
        second: curr.second + 1,
      });
    }
  }
  return -1;
};

console.log(bfs());
