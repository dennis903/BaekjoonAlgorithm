let input = require("fs")
	.readFileSync("input.txt")
	.toString()
	.trim()
	.split("\n");

const N = +input.shift();
const k = input.map(e => +e);
const D = Array(N).fill(0);

const dynamicProgramming = () => {
	if (N < 3) {
		return (k.reduce((prev, curr) => prev + curr, 0));
	} else if (N === 3) {
		return Math.max(k[0] + k[1], k[0] + k[2], k[1] + k[2]);
	}

	D[0] = k[0];
	D[1] = k[1] + D[0];

	for (let i = 2; i < N; i++) {
		D[i] = Math.max(D[i - 2], D[i - 1]) + k[i];
		D[i] = Math.max(D[i], D[i - 1]);
	}

	return (D[N - 1]);
}


console.log(dynamicProgramming());
