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

	}
	console.log(bfs([0, 0]));
}
