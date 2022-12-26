let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

arr = [];
for (let i = 0; i < input.length; i++) {
  arr.push(input[i].split(" ").map((e) => +e));
}

const dynamicProgramming = () => {
  const D = Array.from(Array(N), () => Array(N).fill(0));
  D[0][0] = arr[0][0];

  for (let i = 1; i < N; i++) {
    for (let j = 0; j <= i; j++) {
      if (j == 0) D[i][j] = D[i - 1][j] + arr[i][j];
      else if (j == i) D[i][j] = D[i - 1][j - 1] + arr[i][j];
      else D[i][j] = Math.max(D[i - 1][j - 1], D[i - 1][j]) + arr[i][j];
    }
  }
  return Math.max(...D[N - 1]);
};

console.log(dynamicProgramming());
