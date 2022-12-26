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
  const D = Array(N).fill(1);

  for (let i = 0; i < N; i++) {
    const current = arr[i];
    for (let j = 0; j < i; j++) {
      const value = arr[j];
      if (current > value) D[i] = Math.max(D[j] + 1, D[i]);
    }
  }
  return Math.max(...D);
};

console.log(dynamicProgramming());
