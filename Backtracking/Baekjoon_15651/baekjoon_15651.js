let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const [N, M] = input.shift().split(" ").map(e => +e);
const stack = [];
let result = "";
const backtracking = (node) => {
	if (node === M) {
		result += stack.join(" ") + '\n';
		return ;
	}
	for (let i = 1; i <= N; i++) {
		stack.push(i);
		backtracking(node + 1);
		stack.pop();
	}
}
backtracking(0);
console.log(result);