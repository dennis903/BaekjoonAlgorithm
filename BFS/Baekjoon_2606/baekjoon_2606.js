const input = require('fs').readFileSync('input.txt').toString().split('\n');

const computer = Number(input.shift());
const n = Number(input.shift());
let map = input.map((e) => e.split(" ").map(e => +e));

const bfs = (start) => {
	let graph = [...new Array(computer + 1)].map(() => []);
	const queue = [];
	const visited = [];
	let infectedComputer = 0;
	for (let i = 0; i < n; i++) {
		const [key, value] = map[i];
		graph[key].push(value);
		graph[value].push(key);
	}
	queue.push(start);
	visited.push(start);
	while (queue.length) {
		const cur = queue.shift();
		for (let i = 0; i < graph[cur].length; i++) {
			if (!visited.includes(graph[cur][i])) {
				infectedComputer++;
				queue.push(graph[cur][i]);
				visited.push(graph[cur][i]);
			}
		}
	}
	return (infectedComputer);
}

console.log(bfs(1));