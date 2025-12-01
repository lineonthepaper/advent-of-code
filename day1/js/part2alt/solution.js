
function process() {
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
    if (direction === "L") {
        let oldRight = right;
        let remainder = Math.min(right, value);
        left += (value - remainder);
        right -= remainder;
        if (right === 0 && oldRight !== 0) {
            numTimes++;
        }
        numTimes += Math.floor(left / 100);
    }
    if (direction === "R") {
        let oldLeft = left;
        let remainder = Math.min(left, value);
        right += (value - remainder);
        left -= remainder;
        if (left === 0 && oldLeft !== 0) {
            numTimes++;
        }
        numTimes += Math.floor(right / 100);
    }
    left %= 100;
    right %= 100;

    // console.log(direction + value);
    // console.log("New left: " + left + ", new right: " + right);
    // console.log("Now points at: " + convertToRawValue(left, right));
    // console.log("Num times passed 0: " + numTimes);
    // console.log("-----");

    return [left, right, result + numTimes];    
}

// function convertToRawValue(left, right) {
//     if (left > 0) {
//         return 100 - left;
//     }
//     else {
//         return right;
//     }
// }