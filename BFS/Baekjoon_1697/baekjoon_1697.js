let input = require('fs').readFileSync('input.txt').toString().split('\n');
const [subinsLocation, brosLocation] = input.shift().split(" ").map(e => +e);
let map = Array(200001).fill(0);
let visited = Array(200001).fill(0);
let queue = [];
map[brosLocation] = 1;
const bfs = () => {
	let dist = 0;
	let curLocation = subinsLocation;
	queue.push(curLocation);
	visited[curLocation] = 1;
	while (queue.length) {
		curLocation = queue.shift();
		if (map[curLocation] === 1)
			return (visited[curLocation]);
		dist++;
		for (let i = 0; i < 3; i++) {
			let newLocation = curLocation;
			if (i === 0)
				newLocation = curLocation - 1;
			else if (i === 1)
				newLocation = curLocation + 1;
			else
				newLocation = curLocation * 2;
			if (newLocation > -1 && newLocation <= 200000 && visited[newLocation] === 0) {
				queue.push(newLocation);
				visited[newLocation] = dist;
			}
		}
	}
	return (dist);
}
console.log(bfs());