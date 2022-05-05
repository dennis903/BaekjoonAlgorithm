let input = require('fs').readFileSync('input.txt').toString().split('\n');

const [yTarget, xTarget] = input.shift().split(" ").map(ele => +ele);

let map = input.map(ele => ele.split("").map(e => +e));
const direction = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0]
];
let queue = [];

const bfs = (startNode) => {
    queue.push(startNode);

    while (queue.length) {
        const [x, y, dist] = queue.shift();

        for (let i = 0; i < 4; i++) {
            const dirX = x + direction[i][0];
            const dirY = y + direction[i][1];
            if (dirX > -1 && dirX < xTarget && dirY > -1 && dirY < yTarget) {
                if (map[dirY][dirX] === 1) {
                    map[dirY][dirX] = dist + 1;
                    queue.push([dirX, dirY, map[dirY][dirX]]);
                }
            }
        }
    }
    return (map[yTarget - 1][xTarget - 1]);
}

console.log(bfs([0, 0, 1]));