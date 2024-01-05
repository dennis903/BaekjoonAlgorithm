let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const N = +input.shift();
const arrA = input.shift().split(' ').map(e => +e);
const arrB = input.shift().split(' ').map(e => +e);

arrA.sort((a, b) => a - b);
arrB.sort((a, b) => b - a);

const result = arrA.reduce((prev, curr, index) => prev + curr * arrB[index], 0);

console.log(result);