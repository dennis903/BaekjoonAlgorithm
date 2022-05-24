let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [N, M] = input.shift().split(" ").map(e => +e);
let visited = Array(9).fill(false);
const stack = [];

const backtracking = (node) => {
	if (stack.length === M) {
		console.log(stack.join(" "));
		return ;
	}
	for (let i = 1; i <= N; i++) {
		if (visited[i])
			continue;
		visited[i] = true;
		stack.push(i);
		backtracking(node + 1);
		visited[i] = false;
		stack.pop();
	}
}
backtracking(0);