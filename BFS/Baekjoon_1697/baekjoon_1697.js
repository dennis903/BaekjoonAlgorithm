let input = require('fs').readFileSync('input.txt').toString().split('\n');
const [subinsLocation, brosLocation] = input.shift().split(" ").map(e => +e);
let map = Array(200001).fill(0);
let visited = Array(200001).fill(-1);
let queue = [];
map[brosLocation] = 1;
const bfs = () => {
	let [curLocation, dist] = [subinsLocation, 0];
	queue.push([curLocation, dist]);
	visited[curLocation] = dist;
	while (queue.length) {
		const [curLocation, dist] = queue.shift();
		if (map[curLocation] === 1)
			return (dist);
		for (let i = 0; i < 3; i++) {
			let newLocation = curLocation;
			if (i === 0)
				newLocation = curLocation - 1;
			else if (i === 1)
				newLocation = curLocation + 1;
			else
				newLocation = curLocation * 2;
			if (newLocation > -1 && newLocation <= 200000 && visited[newLocation] === -1) {
				queue.push([newLocation, dist + 1]);
				visited[newLocation] = 1;
			}
		}
	}
	return (dist);
}
console.log(bfs());