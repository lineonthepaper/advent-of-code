
function process() {
    let input = document.getElementById("input").value;
    let splitInput = input.split("\n");

    let result = 0;

    for (let line of splitInput) {
        result += findLargestJoltage(line);
    }
    
    let output = document.getElementById("output");
    output.innerText = result;
}

function findLargestJoltage(line) {
    let largestSoFar = 0;

    for (let i = 0; i < line.length-1; i++) {
        let current = line[i] + "";
        for (let j = i; j < line.length; j++) {
            if (i === j) {
                continue;
            }
            if (Number(current + line[j]) > largestSoFar) {
                largestSoFar = Number(current + line[j]);
            }
        }
    }

    return largestSoFar;
}