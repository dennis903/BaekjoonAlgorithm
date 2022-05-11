const input = require('fs').readFileSync('input.txt').toString().split("\n");
let		map = input.map(e => e.split(''));
let		visited = Array.from(Array(10), () => Array(10).fill(0));
const findFirst = () => {
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			if (map[i][j] === 'B')
				return [i, j];
		}
	}
	return (0, 0);
}
const [startY, startX] = findFirst();
const direction = [
	[0, -1],
	[1, 0],
	[0, 1],
	[-1, 0]
];

const bfs = (startIndex) => {
	const	queue = [];
	queue.push(startIndex);
	visited[startIndex[0]][startIndex[1]] = 1;
	while (queue.length) {
		const [y, x, dist] = queue.shift();
		if (map[y][x] === 'L')
			return (dist - 1);
		for (let i = 0; i < 4; i++) {
			const [dy, dx] = [y + direction[i][1], x + direction[i][0]];
			if (dx >= 0 && dx < 10 && dy >= 0 && dy < 10 && visited[dy][dx] === 0 && map[dy][dx] !== 'R') {
				visited[dy][dx] = 1;
				queue.push([dy, dx, dist + 1]);
			}
		}
	}
	return (0);
}
console.log(bfs([startY, startX, 0]));