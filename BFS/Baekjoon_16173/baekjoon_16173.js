const input = require('fs').readFileSync('input.txt').toString().split("\n");
let maxSize = input.shift();
let map = input.map(e => e.split(" ").map(e => +e));
maxSize = +maxSize;

const direction = [
	[1, 0], //오른쪽
	[0, 1] // 아래쪽
];

let queue = [];
let visited = Array.from(Array(maxSize), () => Array(maxSize).fill(0));

const bfs = (startNode) => {
	queue.push(startNode);
	visited[0][0] = 1;
	while (queue.length) {
		const [x, y] = queue.shift();

		let dist = map[y][x];
		if (dist === -1)
			return ("HaruHaru");
		direction.map(ele => {
			const [dx, dy] = [x + (ele[0] * dist), y + (ele[1] * dist)];
			if (dx >= 0 && dx < maxSize && dy >= 0 && dy < maxSize && visited[dy][dx] === 0) {
				queue.push([dx, dy]);
				visited[dy][dx] = 1;
			}
		})
	}
	return ("Hing");
}

console.log(bfs([0, 0]));