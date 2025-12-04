export default function process() {
    let input = document.getElementById("input").value;
    let splitInput = input.split(",");
    
    let result = 0;

    for (let line of splitInput) {
        let [start, end] = line.split("-");
        result += findInvalid(start, end);
    }

    let output = document.getElementById("output");
    output.innerText = result;
}

function findInvalid(start, end) {
    let sum = 0;
    for (let i = Number(start); i <= Number(end); i++) {
        let numString = i + "";
        if (numString.length % 2 !== 0) {
            continue;
        }
        if (numString.substring(0, numString.length / 2) === numString.substring(numString.length / 2)) {
            sum += i;
        }
    }

    return sum;
}