let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input;
const D = Array(N + 1).fill(0);

const dynamicProgramming = () => {
	D[1] = 1;
	D[2] = 3;

	for (let i = 3; i <= N; i++) {
		D[i] = (D[i - 1] + 2 * D[i - 2]) % 10007;
	}
	return (D[N]);
}

console.log(dynamicProgramming());