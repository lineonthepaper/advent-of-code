function process() {
    let input = document.getElementById("input").value;
    let splitInput = input.split("\n");

    let current = 50;
    let result = 0;

    for (let line of splitInput) {
        current += rotate(line.substring(0, 1), Number(line.substring(1)));
        current %= 100;
        if (current === 0) {
            result++;
        }
    }
    
    let output = document.getElementById("output");
    output.innerText = result;
}

function rotate(direction, value) {
    if (direction === "L") {
        return -value;
    } else {
        return value;
    }
}