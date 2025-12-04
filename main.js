let daysOutput = document.getElementById("days");

fetch("./days.json")
.then(response => response.json())
.then(
    data => {
        console.log(data);
        let i = 1;
        for (let day of data) {
            let h1 = daysOutput.appendChild(document.createElement("h1"));
            h1.innerText = "Day " + i;

            let puzzleP = daysOutput.appendChild(document.createElement("p"));
            puzzleP.innerText = "Puzzle: ";
            let puzzleLink = puzzleP.appendChild(document.createElement("a"));
            puzzleLink.innerText = day.puzzle;
            puzzleLink.href = 'https://adventofcode.com/2025/day/' + i;

            let partsP = daysOutput.appendChild(document.createElement("p"));

            for (let part of day.parts) {
                let partLink = partsP.appendChild(document.createElement("a"));
                partLink.innerText = part;
                partLink.href = 'day' + i + '/js/' + part.toLowerCase().replaceAll(' ', '') + '/index.html';
                partsP.appendChild(document.createTextNode(" / "));
            }

            partsP.removeChild(partsP.lastChild);

            i++;
        }
    }
)