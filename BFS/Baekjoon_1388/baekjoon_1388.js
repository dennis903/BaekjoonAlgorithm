let input = require('fs').readFileSync('input.txt').toString().split('\n');
const [ver, hor] = input.shift().split(" ").map(e => +e);
const map = input.map(e => e.split(""));
let count = 0;
let visited = Array.from(Array(ver), () => Array(hor).fill(0));

const bfs = (v, h) => {
	if (v < 0 || v >= ver || h < 0 || h >= hor)
		return false;
	if (visited[v][h] === 1)
		return false;
	visited[v][h] = 1;
	if (map[v][h] === '-' && (h + 1 >= hor || map[v][h + 1] === '-'))
		bfs(v, h + 1);
	else if (map[v][h] === '|' && ( v + 1 >= ver || map[v + 1][h] === '|'))
		bfs(v + 1, h);
	return true;
}

for (let i = 0; i < ver; i++) {
	for (let j = 0; j < hor; j++) {
		if (bfs(i, j) === true)
			count++;
	}
}

console.log(count);