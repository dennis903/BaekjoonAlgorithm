let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const N = +input.shift();

const greedy = () => {
	let result = 0;
	let acc = 0;

	for (let i = 1; acc <= N; i++) {
		if (acc + i > N) { break; }

		acc += i;
		result++;
	}

	return result;
}

console.log(greedy());