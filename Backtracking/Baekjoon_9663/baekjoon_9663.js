let input = require('fs').readFileSync('input.txt').toString().split('\n');
const N = +input.shift();
const visited = Array.from(Array(N), () => Array(N).fill(0));
let	  count = 0;

const checkVisited = (x, y) => {
	const diff = x - y;
	const diff2 = x + y;
	for (let i = 0; i < N; i++) {
		visited[y][i]++;
		visited[i][x]++;
	}
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (j - i === diff || j + i === diff2)
				visited[i][j]++;
		}
	}
}

const leaveVisited = (x, y) => {
	const diff = x - y;
	const diff2 = x + y;
	for (let i = 0; i < N; i++) {
		visited[y][i]--;
		visited[i][x]--;
	}
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (j - i === diff || j + i === diff2)
				visited[i][j]--;
		}
	}
}

const backtracking = (depth) => {
	if (depth === N) {
		count++;
		return ;
	}
	for (let i = 0; i < N; i++) {
		if (visited[depth][i] === 0) {
			checkVisited(i, depth);
			backtracking(depth + 1);
			leaveVisited(i, depth);
		}
	}
}

backtracking(0);
console.log(count);
