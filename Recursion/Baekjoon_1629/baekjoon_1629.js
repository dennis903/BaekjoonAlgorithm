let input = require('fs').readFileSync('input.txt').toString().split('\n');
const [A, B, C] = input.shift().split(" ").map(e => +e);

const pow = (A, B, C) => {
	if (B === BigInt(1))
		return (BigInt(A % C));
	let val = pow(A, BigInt(parseInt(B / BigInt(2))), C);
	val = val * val % C;
	if (B % BigInt(2) === BigInt(0))
		return val;
	else
		return (val * A) % C;
}

console.log(parseInt(pow(BigInt(A), BigInt(B), BigInt(C))));