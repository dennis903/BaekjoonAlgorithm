const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input.shift());

const arr = input.map((e) => {
	const [x, y] = e.split(' ').map(e => +e);
	return ([x, y]);
});

arr.sort(
	function (a, b) {
		if (a[1] > b[1])
			return 1;
		else if (a[1] == b[1] && a[0] > b[0])
			return 1;
		else
			return -1;
	}
)

let count = 0;
let time = 0;
for (let i = 0; i < N; i++) {
	if (time > arr[i][0])
		continue;
	count++;
	time = arr[i][1];
}
console.log(count);