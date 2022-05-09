let input = require('fs').readFileSync('input.txt').toString().split('\n');

const testCase = Number(input.shift());
const direction = [
	[0, -1],
	[1, 0],
	[0, 1],
	[-1, 0]
];
for (let i = 0; i < testCase; i++) {
	const [hor, ver, num] = input.shift().split(" ").map((e) => +e);
	let map = Array.from(Array(ver), () => (Array(hor).fill(0)));
	let visited = Array.from(Array(ver), () => (Array(hor).fill(0)));
	let queue = [];
	for (let j = 0; j < num; j++) {
		const [x, y] = input.shift().split(" ").map((e) => +e);
		map[y][x] = 1;
	}
	const bfs = () => {
		let bug = 0;
		for (let i = 0; i < ver; i++) {
			for (let j = 0; j < hor; j++) {
				 if (visited[i][j] === 0 && map[i][j] === 1) {
					bug++;
					queue.push([i, j]);
					visited[i][j] = 1;
					while (queue.length) {
						const [y, x] = queue.shift();
						for (let i = 0; i < 4; i++) {
							const [dx, dy] = [x + direction[i][0], y + direction[i][1]];
							if (dx > -1 && dx < hor && dy > -1 && dy < ver && map[dy][dx] === 1 && visited[dy][dx] === 0) {
								queue.push([dy, dx]);
								visited[dy][dx] = 1;
							}
						}
					}
				 }
			}
		}
		return (bug);
	}
	console.log(bfs([0, 0]));
}
