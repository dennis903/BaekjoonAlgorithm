let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => +e);

const N = +input;

const dynamicProgramming = () => {
  const d = [];

  d[1] = 0;
  for (let i = 2; i <= N; i++) {
    d[i] = d[i - 1] + 1;
    if (i % 2 == 0) d[i] = Math.min(d[i], d[Math.floor(i / 2)] + 1);
    if (i % 3 == 0) d[i] = Math.min(d[i], d[Math.floor(i / 3)] + 1);
  }
  return d[N];
};

console.log(dynamicProgramming());
