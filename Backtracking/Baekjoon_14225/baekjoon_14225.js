const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const arr = input
  .shift()
  .split(" ")
  .map((e) => +e);

const pick = [];
let maxSum = 0;
arr.map((e) => (maxSum += e));
const resultArr = Array(maxSum + 2).fill(false);
let visited = Array(N).fill(false);

const backtracking = (index, target, depth) => {
  if (depth === target) {
    let sum = 0;
    for (next of pick) {
      sum += next;
    }
    resultArr[sum] = true;
    return;
  }
  for (let i = index; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      pick.push(arr[i]);
      backtracking(i + 1, target, depth + 1);
      visited[i] = false;
      pick.pop();
    }
  }
};

for (let i = 1; i <= N; i++) {
  backtracking(0, i, 0);
}

for (let i = 1; i < resultArr.length; i++) {
  if (!resultArr[i]) {
    console.log(i);
    break;
  }
}
