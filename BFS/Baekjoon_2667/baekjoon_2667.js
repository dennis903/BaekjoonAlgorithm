let input = require('fs').readFileSync('input.txt').toString().split('\n');
const maxSize = Number(input.shift());
const dir = [
	[0, -1],
	[1, 0],
	[0, 1],
	[-1, 0]
];
map = input.map(e => e.split("").map(e => +e));
let output = [0];
let countedApart = [];
let count = 0;
let queue = [];
let visited = Array.from(Array(maxSize), () => Array(maxSize).fill(false));
const bfs = () => {
	for (let vert = 0; vert < maxSize; vert++) {
		for (let hor = 0; hor < maxSize; hor++) {
			if (map[vert][hor] === 1 && visited[vert][hor] === false) {
				output[0]++;
				count = 1;
				queue.push([vert, hor]);
				visited[vert][hor] = true;
				while (queue.length) {
					const [y, x] = queue.shift();
					for (let i = 0; i < 4; i++) {
						const [dy, dx] = [y + dir[i][1], x + dir[i][0]];
						if (dx >= 0 && dx < maxSize && dy >= 0 && dy < maxSize && visited[dy][dx] === false && map[dy][dx] === 1) {
							queue.push([dy, dx]);
							visited[dy][dx] = true;
							count++;
						}
					}
				}
				countedApart.push(count);
			}
		}
	}
	countedApart.sort((a, b) => a - b).map(e => output.push(e));
	return (output);
}
bfs().map(e => console.log(e))