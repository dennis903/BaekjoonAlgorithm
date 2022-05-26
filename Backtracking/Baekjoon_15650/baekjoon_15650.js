let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input.shift().split(" ").map(e => +e);
const visited = Array(9).fill(false);
const stack = [];
const backtracking = (node) => {
	if (stack.length === M) {
		console.log(stack.join(" "));
		return ;
	}
	for (let i = 1; i <= N; i++) {
		if (visited[i] === true)
			continue;
		stack.push(i);
		for (let j = 0; j <= i; j++)
			visited[j] = true;
		backtracking(node + 1);
		for (let j = 0; j <= i; j++)
			visited[j] = false;
		stack.pop(i);
	}
}

backtracking(0);