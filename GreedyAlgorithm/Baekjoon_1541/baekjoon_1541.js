let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const result = input
	.shift()
	.split('-')
	.map(e => {
		return e.split('+').reduce((prev, curr) => prev + Number(curr), 0);
	 }).reduce((prev, curr) => prev - curr, arr[0]);

console.log(result);
