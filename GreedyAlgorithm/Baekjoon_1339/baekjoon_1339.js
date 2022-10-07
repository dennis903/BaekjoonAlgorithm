let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const arr = [];
let alpha = Array(26).fill(0);
let result = 0;
for (let i = 0; i < N; i++) {
  const tmpArr = input.shift().split("");
  arr.push(tmpArr);
}

for (let i = 0; i < N; i++) {
  let calc = 1;
  for (let j = arr[i].length - 1; j >= 0; j--) {
    alpha[arr[i][j].charCodeAt(0) - 65] += calc;
    calc *= 10;
  }
}

alpha.sort((a, b) => b - a);

for (let i = 0; i < 10; i++) {
  result += alpha[i] * (9 - i);
}

console.log(result);
