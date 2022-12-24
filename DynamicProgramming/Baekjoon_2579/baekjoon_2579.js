let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const D = [];
const S = new Array(N + 1).fill(0);

for (let i = 1; i <= input.length; i++) {
  S[i] = +input[i - 1];
}

const dynamicProgramming = () => {
  D[0] = S[0];
  D[1] = S[1];
  D[2] = S[1] + S[2];
  for (let i = 3; i <= N; i++) {
    D[i] = Math.max(D[i - 2] + S[i], D[i - 3] + S[i] + S[i - 1]);
  }
  return D[N];
};

console.log(dynamicProgramming());
