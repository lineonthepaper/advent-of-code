
function process() {
    let input = document.getElementById("input").value;
    let splitInput = input.split("\n");
    
    let current = 50;
    let result = 0;

    for (let line of splitInput) {
        [current, result] = rotate(line.substring(0, 1), Number(line.substring(1)), current, result);
    }
    
    let output = document.getElementById("output");
    output.innerText = result;
}

function rotate(direction, value, current, result) {
    for (let i = 0; i < value; i++) {
        if (direction === "L") {
            current--;
        }
        else {
            current++;
        }
        current %= 100;
        if (current === 0) {
            result++;
        }
    }

    // console.log(direction + value);
    // console.log("Now points at: " + current);
    // console.log("Num times passed 0: " + numTimes);
    // console.log("-----");

    return [current, result];
    
}