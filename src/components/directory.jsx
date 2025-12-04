import dayData from '../assets/days.json';
import { formatPath } from '../utils/format';
import { Link } from 'react-router';
import { Fragment } from 'react';

export default function Directory() {
    let years = [];
    for (let year in dayData) {
        let dayNum = 1;
        let days = [];

        for (let day of dayData[year]) {
            let puzzleLink = 'https://adventofcode.com/' + year + '/day/' + dayNum;
            let parts = [];
            
            let i = 1;
            for (let part of day.parts) {
                let partLink = "/" + year + '/day' + dayNum + '/' + formatPath(part);

                parts.push(
                    <Fragment key={partLink}><Link to={partLink}>{part}</Link> {i < day.parts.length ? "/" : ""} </Fragment>
                )
                i++;
            }
            days.push(
                <Fragment key={year + "-" + dayNum}>
                <h2>Day {dayNum}</h2>
                <p>Puzzle: <a href={puzzleLink}>{day.puzzle}</a></p>
                {parts}
                </Fragment>
            )
            dayNum++;
        }

        years.push(
            <div className='md:col-span-1 sm:col-span-2 col-span-full' key={year}>
                <h1>{year}</h1>
                {days}
            </div>
        );
    }
    // grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5
    return (
        <>
        <div className={`grid text-center grid-cols-${years.length}`}>
            {years}
        </div>
        </>
    );
}