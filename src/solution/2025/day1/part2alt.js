export default function process() {
    let input = document.getElementById("input").value;
    let splitInput = input.split("\n");
    
    let [left, right] = [0, 50];
    let result = 0;

    for (let line of splitInput) {
        [left, right, result] = rotate(line.substring(0, 1), Number(line.substring(1)), left, right, result);
    }
    
    let output = document.getElementById("output");
    output.innerText = result;
}

function rotate(direction, value, left, right, result) {
    let numTimes = 0;
    let temp;
    let x;
    let y;

    if (direction === "L") {
        temp = right;
        y = right;
        x = left;
    } else {
        temp = left;
        y = left;
        x = right;
    }

    let remainder = Math.min(y, value);
    
    x += (value - remainder);
    y -= remainder;

    if (y === 0 && temp !== 0) {
        numTimes++;
    }

    numTimes += Math.floor(x / 100);

    x %= 100;

    if (direction === "L") {
        return [x, y, result + numTimes];
    } else {
        return [y, x, result + numTimes];
    }

}
