let daysOutput = document.getElementById("days");

fetch("./days.json")
.then(response => response.json())
.then(
    data => {
        daysOutput.classList.add("grid-cols-" + Object.keys(data).length);

        for (let year in data) {
            let yearOutput = daysOutput.appendChild(document.createElement("div"));
            yearOutput.className = "md:col-span-1 sm:col-span-2 col-span-full";
            let yearh1 = yearOutput.appendChild(document.createElement("h1"));
            yearh1.innerText = year;
            yearh1.id = year;

            let dayNum = 1;
            
            for (let day of data[year]) {
                let h2 = yearOutput.appendChild(document.createElement("h2"));
                h2.innerText = "Day " + dayNum;
    
                let puzzleP = yearOutput.appendChild(document.createElement("p"));
                puzzleP.innerText = "Puzzle: ";
                let puzzleLink = puzzleP.appendChild(document.createElement("a"));
                puzzleLink.innerText = day.puzzle;
                puzzleLink.href = 'https://adventofcode.com/' + year + '/day/' + dayNum;
    
                let partsP = yearOutput.appendChild(document.createElement("p"));
    
                for (let part of day.parts) {
                    let partLink = partsP.appendChild(document.createElement("a"));
                    partLink.innerText = part;
                    partLink.href = year + '/day' + dayNum + '/js/' + part.toLowerCase().replaceAll(' ', '') + '/index.html';
                    partsP.appendChild(document.createTextNode(" / "));
                }
    
                partsP.removeChild(partsP.lastChild);
    
                dayNum++;
            }
        }
    }
)