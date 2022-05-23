const { BADFLAGS } = require('dns');

const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const N = +input.shift();
const map = input.map(e => e.split(" ").map(e => +e));
const max = Math.max(...map.flat());
const direction = [
	[0, -1],
	[1, 0],
	[0, 1],
	[-1, 0]
];
let 	maxNum = 0;

for (let height = 0; height <= max; height++) {
	let visited = Array.from(Array(N), () => Array(N).fill(false));
	let count = 0;

	const bfs = ([startY, startX]) => {
		const queue = [];
		queue.push([startY, startX]);
		visited[startY][startX] = true;
		while (queue.length) {
			const [y, x] = queue.shift();
			for (let i = 0; i < 4; i++) {
				const [dirY, dirX] = [y + direction[i][1], x + direction[i][0]];
				if (dirY >= 0 && dirY < N && dirX >= 0 && dirX < N && map[dirY][dirX] > height && visited[dirY][dirX] === false) {
					queue.push([dirY, dirX]);
					visited[dirY][dirX] = true;
				}
			}
		}
	}

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (map[i][j] > height && !visited[i][j]) {
				bfs([i, j]);
				count++;
			}
		}
	}
	if (count > maxNum)
		maxNum = count;
}
console.log(maxNum);