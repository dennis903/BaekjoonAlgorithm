let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const N = +input.shift();

let restMoney = 1000 - N;

const greedy = () => {
	const changeList = [500, 100, 50, 10, 5, 1];

	return changeList.reduce((prev, curr) => {
		prev += Math.floor(restMoney / curr);
		
		restMoney = restMoney % curr;

		return prev;
	}, 0);
}

console.log(greedy());