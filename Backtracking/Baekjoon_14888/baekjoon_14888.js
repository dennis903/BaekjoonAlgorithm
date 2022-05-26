let input = require('fs').readFileSync('input.txt').toString().split('\n');

const N = +input.shift();
const numbers = input.shift().split(" ").map(e => +e);
let	  calc = input.shift().split(" ").map(e => +e);
let		max = 1000000001;
let		min = -1000000001;
const backtracking = (k) => {
	if (k === N) {
		
		return ;
	}
}

console.log(max);
console.log(min);