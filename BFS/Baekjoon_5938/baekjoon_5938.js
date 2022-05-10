const input = require('fs').readFileSync('input.txt').toString().split("\n");
const [N, M] = input.shift().split(" ").map(e => +e);
const graph = [...new Array(N + 1)].map(() => []);
const visited = [];
for (let i = 0; i < M; i++) {
	const [x, y] = input.shift().split(" ").map(e => +e);
	graph[x].push(y);
	graph[y].push(x);
}
graph.map(e => e.sort((a, b) => a - b));

const dfs = (start) => {
	if (visited.includes(start))
		return ;
	visited.push(start);
	for (let i = 0; i < graph[start].length; i++) {
		dfs(graph[start][i]);
	}
}
const checkInclude = () => {
	const filteredCow = [];
	for (let i = 1; i <= N; i++) {
		if (!visited.includes(i))
			filteredCow.push(i);
	}
	if (filteredCow.length)
		return (filteredCow.join(" "));
	else
		return 0;
}
dfs(1);
console.log(checkInclude());