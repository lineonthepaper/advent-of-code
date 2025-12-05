import { Link } from "react-router"
import { formatPath } from "../utils/format"

async function process(year, day, part) {
    let solution = await import(
        `../solution/${year}/day${day}/${formatPath(part)}.js`
    );
    solution.default();
}

export default function Part({year, day, part}) {
    
    return (
        <div className="px-8">
        <h1>{year} Day {day} {part}</h1>
        <Link to="/">Back to Directory</Link>
        <hr className="bg-slate-400 text-slate-400"/>
        <h2>Input</h2>
        <textarea id="input" 
        className="border border-slate-400 bg-neutral-secondary-medium rounded-md focus:ring-0" 
        cols="60" rows="10"
        ></textarea>
        <button type="submit" onClick={() => process(year, day, part)}>Submit</button>

        <h2>Answer</h2>
        <div id="output"></div>
        </div>
    )
}