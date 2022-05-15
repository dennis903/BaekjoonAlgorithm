const input = require('fs').readFileSync('input.txt').toString().split("\n");
const direction = [
	[0, -1],
	[1, 0],
	[0, 1],
	[-1, 0]
];

while (input.length) {
	const [W, H] = input.shift().split(" ").map(e => +e);
	let		map = Array.from(Array(H), () => Array(W));
	const bfs = (start) => {
		let queue =	[];
		let copiedMap = JSON.parse(JSON.stringify(map));
		queue.push(start);
		while (queue.length) {
			const [y, x] = queue.shift();
			for (let i = 0; i < 4; i++) {
				const [dy, dx] = [y + direction[i][1], x + direction[i][0]];
				if (dx >= 0 && dx < W  && dy >= 0 && dy < H && copiedMap[dy][dx] === 'T') {
					queue.push([dy, dx]);
					copiedMap[dy][dx] = 'S';
				}
			}
		}
		return (copiedMap);
	}
	for (let i = 0; i < H; i++) {
		map[i] = input.shift().split("");
	}
	for (let i = 0; i < H; i++) {
		for (let j = 0; j < W; j++) {
			if (map[i][j] === 'S') {
				bfs([i, j]).map(e => console.log(e.join("")))
				break ;
			}
		}
	}
}
