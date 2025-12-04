
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
    let largest = "";

    let indexRemoved = -1;
    let window = 11;
    for (let i = 0; i < 12; i++) {
        let nextLargest = String(
            Math.max(...Array.from(line.substring(indexRemoved + 1, line.length - window)).map(Number))
        );

        largest += nextLargest;
    
        indexRemoved = line.substring(indexRemoved + 1, line.length - window).indexOf(nextLargest) + indexRemoved + 1;
    
        window--;
    }
    return Number(largest);
}