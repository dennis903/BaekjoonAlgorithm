let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const N = +input.shift();
const dist = input.shift().split(' ').map(e => +e);
const city = input.shift().split(' ').map(e => +e);

const greedy = () => {
	return dist.reduce((prev, curr, index) => {
		if (index === 0 || index === N - 1) { return prev; }
	
		if (city[index - 1] < city[index]) {
			return prev + city[index - 1] * curr;
		} else {
			return prev + city[index] * curr;
		}
	}, city[0] * dist[0])
}

console.log(greedy());
