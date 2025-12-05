export default function process() {
    let input = document.getElementById("input").value;
    let splitInput = input.split("\n");

    let ranges = [];
    let ids = [];
    let scanningRanges = true;
    for (let line of splitInput) {
        if (line === "") {
            scanningRanges = false;
            continue;
        }
        if (scanningRanges) {
            ranges.push(line);
        } else {
            ids.push(line);
        }
    }

    let result = getNumFresh(ranges, ids);
    
    let output = document.getElementById("output");
    output.innerText = result;
}

function getNumFresh(ranges, ids) {
    let fresh = [];
    ids = ids.map(Number);

    for (let range of ranges) {
        let [start, end] = range.split("-").map(Number);

        for (let id of ids) {
            if (id >= start && id <= end && !fresh.includes(id)) {
                fresh.push(id);
            }
        }
    }

    return fresh.length;
}