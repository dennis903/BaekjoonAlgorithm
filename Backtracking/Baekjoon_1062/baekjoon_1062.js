const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input
  .shift()
  .split(" ")
  .map((e) => +e);

const alpha = Array(26).fill(false);

alpha["a".charCodeAt(0) - 97] = true;
alpha["c".charCodeAt(0) - 97] = true;
alpha["t".charCodeAt(0) - 97] = true;
alpha["i".charCodeAt(0) - 97] = true;
alpha["n".charCodeAt(0) - 97] = true;

const words = [];

input.map((e) => {
  words.push(e);
});

let max = 0;

const canRead = () => {
  let count = 0;

  words.map((word) => {
    let check = true;
    for (let i = 0; i < word.length; i++) {
      if (!alpha[word.charCodeAt(i) - 97]) {
        check = false;
        break;
      }
    }
    if (check) count++;
  });
  return count;
};

const backtracking = (index, depth) => {
  if (depth === K - 5) {
    max = Math.max(max, canRead());
    return;
  }

  for (let i = index; i < 26; i++) {
    if (!alpha[i]) {
      alpha[i] = true;
      backtracking(index + 1, depth + 1);
      alpha[i] = false;
    }
  }
};

if (K >= 5) backtracking(0, 0);

console.log(max);
