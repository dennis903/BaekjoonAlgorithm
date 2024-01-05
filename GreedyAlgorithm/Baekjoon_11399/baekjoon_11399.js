let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input.shift());
const arr = input.shift().split(' ').map(e => Number(e));

const greedy = () => {
	/*
	* [IDEA]
	* 1. 대기 시간이 가장 짧은 순서대로 정렬한다.
	* 2. 배열을 돌면서 계산한 이전 시간의 합에 현재 인덱스의 값을 더한다.
	* 3. 결과를 도출한다.
	*/

	arr.sort((a, b) => a - b);

	let result = 0;
	let prev = 0;

	arr.forEach((value, index) => {
		result = result + prev + value;
		prev = prev + value;
	});

	return result;
}

console.log(greedy());