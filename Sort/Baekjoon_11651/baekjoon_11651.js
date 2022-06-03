const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let   arr = [];
let	  N = +input.shift();

for (let i = 0; i < input.length; i++) {
	const tmpArr = input[i].split(" ").map(e => +e);
	arr.push(tmpArr);
}

arr.sort((a, b) => {
	if (a[1] > b[1])
		return 1;
	else if (a[1] == b[1] && a[0] > b[0])
		return 1;
	else
		return -1;
})
arr = arr.map(e => e.join(" ")).join("\n");
console.log(arr);