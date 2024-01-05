let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input;
const D = Array(N + 1).fill(0);

const dynamicProgramming = () => {
	D[1] = 1;

	if (N < 2) {
		return 1;
	}

	for (let i = 2; i <= N; i++) {
		D[i] = BigInt(D[i - 1]) + BigInt(D[i - 2]);
	}
	return D[N].toString();
}

console.log(dynamicProgramming());