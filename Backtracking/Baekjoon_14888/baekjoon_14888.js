let input = require('fs').readFileSync('input.txt').toString().split('\n');

const N = +input.shift();
const numbers = input.shift().split(" ").map(e => +e);
let		calc = input.shift().split(" ").map(e => +e);
const	calcArr = [];
const	calcStack = [];
const	visited = Array(N - 1).fill(false);
let 	result = [];
calc.map((e, i) => {
		while (e > 0) {
			if (i === 0)
				calcArr.push('+');
			else if (i === 1)
				calcArr.push('-');
			else if (i === 2)
				calcArr.push('*');
			else if (i === 3)
				calcArr.push('/');
			e--;
		}
})
const backtracking = (k) => {
	if (k === N - 1) {
		let num = numbers[0];
		for (let i = 0; i < k; i++) {
			if (calcStack[i] === '+')
				num += numbers[i + 1];
			else if (calcStack[i] === '-')
				num -= numbers[i + 1];
			else if (calcStack[i] === '*')
				num *= numbers[i + 1];
			else
				num = parseInt(num / numbers[i + 1]);
		}
		if (num === -0)
			num = 0;
		result.push(num);
		return ;
	}
	for (let i = 0; i < N - 1; i++) {
		if (!visited[i]) {
			visited[i] = true;
			calcStack.push(calcArr[i]);
			backtracking(k + 1);
			visited[i] = false;
			calcStack.pop();
		}
	}
}
backtracking(0);
console.log(Math.max(...result));
console.log(Math.min(...result));