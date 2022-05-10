let input = require('fs').readFileSync('input.txt').toString().split('\n');
const [N, M, V] = input.shift().split(" ").map(e => +e);
let graph = [...new Array(N + 1)].map(() => []);
let dfsVisited = [];

for (let i = 0; i < M; i++) {
	const [x, y] = input.shift().split(" ").map(e => +e);
	graph[x].push(y);
	graph[y].push(x);
}
graph.map(e => e.sort((a, b) => a - b));

const dfs = (start) => {
	if (dfsVisited.includes(start))
		return ;
	dfsVisited.push(start);
	const cur = start;
	for (let i = 0; i < graph[cur].length; i++) {
		if (!dfsVisited.includes(graph[cur][i])) {
			dfs(graph[cur][i]);
		}
	}
}


const bfs = (start) => {
	let visited = [];
	let stack = [];

	stack.push(start);
	visited.push(start);

	while (stack.length) {
		const cur = stack.shift();
		for (let i = 0; i < graph[cur].length; i++) {
			if (!visited.includes(graph[cur][i])) {
				stack.push(graph[cur][i]);
				visited.push(graph[cur][i]);
			}
		}
	}
	return (visited);
}
dfs(V);
console.log(dfsVisited.join(" "));
console.log(bfs(V).join(" "));