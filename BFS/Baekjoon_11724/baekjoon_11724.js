let input = require('fs').readFileSync('input.txt').toString().trim("").split('\n');
const [N, M] = input.shift().split(" ").map(e => +e);
const graph = [...new Array(N + 1)].map(() => []);
const visited = Array(N + 1).fill(false);
let		count = 0;

for (let i = 0; i < M; i++) {
	const [first, dest] = input.shift().split(" ").map(e => +e);
	graph[first].push(dest);
	graph[dest].push(first);
}

const dfs = (start) => {
	visited[start] = true;

	for (let i = 0; i < graph[start].length; i++) {
		const next = graph[start][i];
		if (!visited[next]) {
			dfs(next);
		}
	}
}

for (let i = 1; i <= N; i++) {
	if (!visited[i]) {
		dfs(i);
		count++;
	}
}
console.log(count);