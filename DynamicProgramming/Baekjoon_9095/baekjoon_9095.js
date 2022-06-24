let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const [N, ...arr] = input.map(e => +e);
const result = [];

const dynamicProgramming = (value) => {
	let table = [0, 1, 2 ,4];
	for (let i = 4; i <= value; i++) {
		table[i] = table[i - 1] + table[i - 2] + table[i - 3];
	}
	return (table[value]);
}

for (value of arr) {
	result.push(dynamicProgramming(value));
}

console.log(result.join("\n"));