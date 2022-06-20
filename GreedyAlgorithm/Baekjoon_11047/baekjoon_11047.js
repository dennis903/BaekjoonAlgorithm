let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [N, K] = input.shift().split(" ").map(e => +e);
const coinArr = [];
let count = 0;
let restMoney = K;
for (value of input) {
	coinArr.push(+value);
}

coinArr.sort((a, b) => b - a);

for (value of coinArr) {
	const num = Math.floor(restMoney / value);
	count += num;
	restMoney %= value;
}

console.log(count);