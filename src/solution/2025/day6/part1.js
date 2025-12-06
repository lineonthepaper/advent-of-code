export default function process() {
    let input = document.getElementById("input").value;
    let splitInput = input.split("\n");

    let numbers = [];
    let operators = [];
    let scanningNumbers = true;
    for (let line of splitInput) {
        if (line.trim()[0] === "*" || line.trim()[0] === "+") {
            scanningNumbers = false;
        }
        if (scanningNumbers) {
            numbers.push(line.trim().split(/[ ]+/).map(Number));
        } else {
            operators = line.trim().split(/[ ]+/);
        }
    }

    let result = cephalopodMath(numbers, operators);
    
    let output = document.getElementById("output");
    output.innerText = result;
}

function cephalopodMath(numbers, operators) {
    let sum = 0;

    for (let j = 0; j < operators.length; j++) {
        let curNums = [];
        for (let i = 0; i < numbers.length; i++) {
            curNums.push(numbers[i][j]);
        }
        let answer;
        if (operators[j] === "*") {
            answer = curNums.reduce((prev, x) => prev * x, 1);
        } else if (operators[j] === "+") {
            answer = curNums.reduce((prev, x) => prev + x, 0);
        }
        sum += answer;
    }

    return sum;
}