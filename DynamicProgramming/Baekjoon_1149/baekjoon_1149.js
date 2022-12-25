let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const red = [];
const green = [];
const blue = [];

for (let i = 0; i < input.length; i++) {
  const [r, g, b] = input[i].split(" ").map((e) => +e);
  red.push(r);
  green.push(g);
  blue.push(b);
}

const dynamicProgramming = () => {
  const D = Array.from(Array(N + 1), () => Array(3).fill(0));
  D[0][0] = red[0];
  D[0][1] = green[0];
  D[0][2] = blue[0];

  for (let i = 1; i < N; i++) {
    D[i][0] = Math.min(D[i - 1][1], D[i - 1][2]) + red[i];
    D[i][1] = Math.min(D[i - 1][0], D[i - 1][2]) + green[i];
    D[i][2] = Math.min(D[i - 1][0], D[i - 1][1]) + blue[i];
  }
  return Math.min(D[N - 1][0], D[N - 1][1], D[N - 1][2]);
};

console.log(dynamicProgramming());
