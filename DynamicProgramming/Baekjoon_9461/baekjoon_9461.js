let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const D = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];

const dynamicProgramming = (num) => {
  for (let i = 11; i <= num; i++) D[i] = D[i - 1] + D[i - 5];
  return D[num];
};

for (let i = 0; i < N; i++) console.log(dynamicProgramming(+input[i]));
