let input = require('fs').readFileSync('input.txt').toString().trim().split('\n').map(e => +e);

const dynamicProgramming = (n) => {
	let arr = [[1, 0], [0, 1]];

	for (let i = 2; i <= n; i++) {
		arr[i] = [arr[i - 1][0] + arr[i - 2][0], arr[i - 1][1] + arr[i - 2][1]];
	}
	return (arr[n].join(" "));
}

for (let i = 1; i <= input[0]; i++) {
	console.log(dynamicProgramming(input[i]));
}
