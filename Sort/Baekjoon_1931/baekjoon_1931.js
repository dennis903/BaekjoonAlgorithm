const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input.shift());

const arr = input.map((e) => {
	const [x, y] = e.split(' ').map(e => +e); // x : 회의 시작 시간, y : 회의 마감 시간
	return ([x, y]);
});


arr.sort(
	function (a, b) {
		if (a[1] > b[1]) //먼저 회의가 끝나는 시간으로 오름차순 정렬
			return 1;
		else if (a[1] == b[1] && a[0] > b[0]) // 만약 회의 끝나는 시간이 같다면 회의가 시작하는 시간 순으로 오름차순 정렬
			return 1;
		else
			return -1;
	}
)

let count = 0;
let time = 0;
for (let i = 0; i < N; i++) {
	if (time > arr[i][0]) //현재 시간이 시작 시간보다 크면 패스
		continue;
	count++;
	time = arr[i][1]; //마감 시간을 현재 시간으로 저장
}
console.log(count);