let input = require('fs').readFileSync('input.txt').toString().split('\n');
const [N, K] = input.shift().split(" ").map(e => +e);
const coinArr = [];
let count = 0;
for (value of input) {
	coinArr.push(+value);
}

coinArr.sort((a, b) => b - a);

for (value of coinArr) {
	const num = Math.floor(K / value);
	
}