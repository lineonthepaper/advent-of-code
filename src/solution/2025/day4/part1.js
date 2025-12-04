export default function process() {
    let input = document.getElementById("input").value;
    let splitInput = input.split("\n");

    let twoDArr = [];

    for (let line of splitInput) {
        twoDArr.push(Array.from(line));
    }

    let result = findRolls(twoDArr);
    
    let output = document.getElementById("output");
    output.innerText = result;
}

function findRolls(twoDArr) {
    let result = 0;

    let rowNum = 0;
    for (let row of twoDArr) {
        let colNum = 0;
        for (let cell of row) {
            let adjCount = 0;

            if (cell === ".") {
                colNum++;
                continue;
            }

            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    if (i === 0 && j === 0) {
                        continue;
                    }
                    if (twoDArr[rowNum + i] !== undefined) {
                        if (
                            twoDArr[rowNum + i][colNum + j] === "@"
                        ) {
                            adjCount++;
                        }
                    }
                }
            }

            if (adjCount < 4) {
                result++;
            }

            colNum++;
        }
        
        rowNum++;
    }

    return result;
}