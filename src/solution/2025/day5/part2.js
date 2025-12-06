export default function process() {
    let input = document.getElementById("input").value;
    let splitInput = input.split("\n");

    let ranges = [];
    for (let line of splitInput) {
        if (line === "") {
            break;
        }
        ranges.push(line);
    }

    let result = getNumFresh(ranges);
    
    let output = document.getElementById("output");
    output.innerText = result;
}

function getNumFresh(ranges) {
    function compareRanges(a, b) {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    }
    
    let freshRanges = [];

    ranges = ranges.map(range => range.split("-").map(Number));
    ranges.sort(compareRanges);
    
    console.log(ranges);

    let [start, end] = ranges[0];

    for (let range of ranges) {
        let [checkStart, checkEnd] = range;
        
        if (checkStart > end) {
            freshRanges.push([start, end]);
            start = checkStart;
            end = checkEnd;
        } else if (checkEnd > end) {
            end = checkEnd;
        }
    }

    freshRanges.push([start, end]);

    let sum = freshRanges
    .map(
        freshRange => freshRange[1] - freshRange[0] + 1
    )
    .reduce(
        (partialSum, x) => partialSum + x, 0
    );

    return sum;
}