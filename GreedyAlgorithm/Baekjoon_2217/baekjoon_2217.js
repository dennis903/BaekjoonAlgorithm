let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const N = +input.shift();
let max = 0;

input.sort((a, b) => a - b).forEach((item, index) => {
	max = Math.max(max, Number(item) * (N - index));
})

console.log(max);