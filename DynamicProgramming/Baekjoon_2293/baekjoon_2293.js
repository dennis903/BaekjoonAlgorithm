let input = require('fs').readFileSync('input.txt').toString().trim().split('\n').map(e => +e);
let [N, K] = +input.shift();

// (1, 10)
// 1 * 10
// 1

// (2, 10) 
// 1 2
// 1 * 10
// 1 * 2 + 2 * 4
// 1 * 4 + 2 * 3
// 1 * 6 + 2 * 2
// 1 * 8 + 2
// 2 * 5
// 6

// (3, 10)
// 1 2 5
// 10