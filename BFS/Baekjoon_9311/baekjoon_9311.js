const input = require('fs').readFileSync('input.txt').toString().split("\n");
const testCase = Number(input.shift());
const direction = [
	[0, -1],
	[1, 0],
	[0, 1],
	[-1, 0]
];
for (let i = 0; i < testCase; i++) {
	const [height, width] = input.shift().split(" ").map(e => +e);
	let		map = [];
	const bfs = ([startY, startX, startDist]) => {
		let queue = [];
		let	visited = Array.from(Array(height), () => Array(width).fill(0));
		queue.push([startY, startX, startDist]);
		visited[startY][startX] = 1;
		while (queue.length) {
			const [y, x, dist] = queue.shift();
			if (map[y][x] === 'G')
				return ("Shortest Path: " + dist);
			for (let i = 0; i < 4; i++) {
				const [dy, dx] = [y + direction[i][1], x + direction[i][0]];
				if (dx >= 0 && dx < width && dy >= 0 && dy < height && (map[dy][dx] === 'O' || map[dy][dx] === 'G' || map[dy][dx] === '0') && visited[dy][dx] === 0)
				{
					queue.push([dy, dx, dist + 1]);
					visited[dy][dx] = 1;
				}
			}
		}
		return ("No Exit");
	}

	for (let j = 0; j < height; j++) {
		map.push(input.shift().split(""));
	}
	for (let k = 0; k < height; k++) {
		for (let m = 0; m < width; m++) {
			if (map[k][m] === 'S') {
				console.log(bfs([k, m, 0]));
				break ;
			}
		}
	}
}