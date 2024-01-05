let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const num = +input.shift();

for (let i = 0; i < num; i++) {
	const [N, M] = input.shift().split(' ').map(e => +e);
	const D = Array.from(Array(N + 1), () => Array(M + 1).fill(0));

	const dynamicProgramming = () => {
		for (let i = 1; i <= M; i++) {
			D[1][i] = i;
			for (let j = 2; j <= N; j++) {
				D[j][i] = D[j - 1][i - 1] + D[j][i - 1];
			}
		}
		return (D[N][M]);
	}
	console.log(dynamicProgramming());
}
