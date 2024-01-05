let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const arr = [];

for (let i = 0; i < N; i++) {
  arr.push(+input.shift());
}

const dynamicProgramming = () => {
  const D = Array.from(Array(N), () => Array(2).fill(0));
  let max = 0;
  D[0][0] = arr[0];
  D[0][1] = arr[0];
  for (let i = 1; i < N; i++) {
    if (i == 1) {
      D[1][0] = arr[1];
      D[1][1] = D[0][0] + arr[1];
    } else {
      D[i][0] = D[i - 2][1] + arr[i];
      D[i][1] = D[i - 1][0] + arr[i];
    }
    max = Math.max(max, D[i][0], D[i][1]);
  }
  return max;
};

console.log(dynamicProgramming());
