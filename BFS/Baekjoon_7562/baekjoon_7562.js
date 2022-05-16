let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let direction = [
	[-2, -1],
	[-1, -2],
	[1, -2],
	[2, -1],
	[2, 1],
	[1, 2],
	[-1, 2],
	[-2, 1]
]
let testCase = Number(input.shift());
while (testCase > 0) {
	const size = +input.shift();
	let	  map = Array.from(Array(size), () => Array(size).fill(-1));
	const [startY, startX] = input.shift().split(" ").map(e => +e);
	const [finalY, finalX] = input.shift().split(" ").map(e => +e);	
	const bfs = ([startY, startX, dist]) => {
		const queue = [];

		queue.push([startY, startX, dist]);
		map[startY][startX] = dist;
		while (queue.length) {
			const [y, x, dist] = queue.shift();
			if (y === finalY && x === finalX) {
				return (dist);
			}
			for (let i = 0; i < direction.length; i++) {
				const [dirY, dirX] = [y + direction[i][1], x + direction[i][0]];
				if (dirX >= 0 && dirX < size && dirY >= 0 && dirY < size && map[dirY][dirX] === -1) {
					map[dirY][dirX] = dist + 1;
					queue.push([dirY, dirX, dist + 1]);
				}
			}
		}
		return (dist);
	}
	console.log(bfs([startY, startX, 0]));
	testCase--;
}