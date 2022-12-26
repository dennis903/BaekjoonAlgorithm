let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const arr = input
  .shift()
  .split(" ")
  .map((e) => +e);

const dynamicProgramming = () => {
  const D = Array(N);

  D[0] = arr[0];
  for (let i = 1; i < N; i++) D[i] = Math.max(D[i - 1] + arr[i], arr[i]);
  return Math.max(...D);
};

console.log(dynamicProgramming());
