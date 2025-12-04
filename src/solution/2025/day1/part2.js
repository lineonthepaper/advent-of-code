export default function process() {
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
    let numTimes = 0;

    if (direction === "L") {
        if (current === 0) {
            numTimes--;
        }
        current -= value;
    } else {
        current += value;
    }
    
    while (current < 0) {
        current += 100;
        numTimes++;
    }
    
    while (current > 100) {
        current -= 100;
        numTimes++;
    }

    if (current % 100 === 0) {
        current = 0;
        numTimes++;
    }

    if (direction === "L") {
        if (current === 0 && numTimes === 0) {
            numTimes++;
        }
    }

    // console.log(direction + value);
    // console.log("Now points at: " + current);
    // console.log("Num times passed 0: " + (numTimes < 0 ? 0 : numTimes));
    // console.log("-----");

    return [current, result + (numTimes < 0 ? 0 : numTimes)];
    
}