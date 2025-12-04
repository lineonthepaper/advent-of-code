import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app";
import './index.css';
import days from './assets/days.json';
import React from "react";
import { formatPath } from "./utils/format";
import Directory from "./components/directory";
import Part from "./components/part";

let routes = [];
for (let year in days) {
  let dayRoutes = [];
  let dayNum = 1;
  for (let day of days[year]) {
    for (let part of day.parts) {
      dayRoutes.push(
      <Route element={<Part year={year} day={dayNum} part={part} />} 
      path={"day" + dayNum + "/" + formatPath(part)}/>
    )
    }
    dayNum++;
  }
  routes.push(React.createElement(Route, {path: year}, dayRoutes));
}
// console.log(routes);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Directory />} />
      {routes}
    </Routes>
  </BrowserRouter>,
);