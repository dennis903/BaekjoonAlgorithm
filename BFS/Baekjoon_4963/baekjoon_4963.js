let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const direction = [
	[-1, -1],
	[0, -1],
	[1, -1],
	[1, 0],
	[1, 1],
	[0, 1],
	[-1, 1],
	[-1, 0]
];

while (input.length) {
	const [W, H] = input.shift().split(" ").map(e => +e);
	const map = [];
	const visited = Array.from(Array(H), () => Array(W).fill(false));
	let	  count = 0;
	const bfs = ([startY, startX]) => {
		const queue = [];

		queue.push([startY, startX]);
		visited[startY][startX] = true;
		while (queue.length) {
			const [y, x] = queue.shift();
			direction.map(e => {
				const [dirY, dirX] = [y + e[1], x + e[0]];
				if (dirX >= 0 && dirX < W && dirY >= 0 && dirY < H && visited[dirY][dirX] === false && map[dirY][dirX] === 1) {
					queue.push([dirY, dirX]);
					visited[dirY][dirX] = true;
				}
			})
		}
	}

	for (let i = 0; i < H; i++) {
		const mapLine = input.shift().split(" ").map(e => +e);
		map.push(mapLine);
	}
	for (let i = 0; i < H; i++) {
		for (let j = 0; j < W; j++) {
			if (map[i][j] === 1 && !visited[i][j]) {
				bfs([i, j]);
				count++;
			}
		}
	}
	if (H !== 0)
		console.log(count);
}