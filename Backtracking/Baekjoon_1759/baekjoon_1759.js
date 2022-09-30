const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [L, C] = input
  .shift()
  .split(" ")
  .map((e) => +e);

const arr = input.shift().split(" ").sort();
const pick = [];
let result = "";
const consonant = ["a", "e", "i", "o", "u"];
const backtracking = (index, depth) => {
  if (depth === L) {
    let consonantCount = 0;
    let vowelCount = 0;
    pick.map((e) => {
      if (consonant.findIndex((v) => e === v) !== -1) consonantCount++;
      else vowelCount++;
    });
    if (consonantCount >= 1 && vowelCount >= 2) result += `${pick.join("")}\n`;
    return;
  }
  for (let i = index; i < C; i++) {
    pick.push(arr[i]);
    backtracking(i + 1, depth + 1);
    pick.pop(arr[i]);
  }
};

backtracking(0, 0);
console.log(result.trim("\n"));

//L개의 문자열 만들기
//1개의 모음, 2개의 자음(최소)
//암호에서 증하가는 순서로 배열
