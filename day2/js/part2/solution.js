function process() {
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

        if(isInvalid(numString)) {
            sum += i;
        }

    }

    return sum;
}

function isInvalid(numString) {
    let length = 1;
    while (length <= Math.floor(numString.length / 2)) {
        let old = numString.substring(0, length);
        for (let j = length; j < numString.length; j+=length) {
            let current = numString.substring(j, length+j)
            if (old !== current) {
                break;
            } else {
                if (length + j >= numString.length) {
                    return true;
                } 
            }
        }
        length++;
    }
    return false;
}