const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

let map = input.map((e) => e.split(" ").map((v) => +v));
let found = false;
let zero = 0;
const stack = [];
for (let i = 0; i < 9; i++)
  for (let j = 0; j < 9; j++)
    if (map[i][j] === 0) {
      zero++;
      stack.push([i, j]);
    }
//depth = 0의 갯수 만큼

const checkValidation = (y, x) => {
  const [check_y, check_x] = [Math.floor(y / 3), Math.floor(x / 3)];
  for (let i = check_y * 3; i < check_y * 3 + 3; i++) {
    for (let j = check_x * 3; j < check_x * 3 + 3; j++) {
      if (map[i][j] === map[y][x]) {
        if (i !== y && j !== x) return false;
      }
    }
  }
  //column check
  for (let i = 0; i < 9; i++) {
    if (i !== y) if (map[i][x] === map[y][x]) return false;
    if (i !== x) if (map[y][i] === map[y][x]) return false;
  }
  //row check
  return true;
};

const backtracking = (depth) => {
  if (depth === zero) {
    found = true;
    return;
  }
  const [y, x] = stack[depth];
  for (let i = 1; i <= 9; i++) {
    map[y][x] = i;
    if (checkValidation(y, x)) backtracking(depth + 1);
    if (found) return;
  }
  map[y][x] = 0;
};

backtracking(0);

console.log(map.map((e) => e.join(" ")).join("\n"));
