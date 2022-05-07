import React from "react";
import { locations } from "../data/locationData";

function ShowAllData() {
  let tot = {};
  let tempSum;
  const displayLocationData = (location, level = 0) => {
    return (
      <section className="place-data">
        {location.map((place, i) => {
          if ("children" in place) {
            const renderHtml = displayLocationData(place.children, ++level);

            --level;

            if (tot["level" + Number(level - 1)])
              tot["level" + Number(level - 1)] += tot["level" + level];
            else tot["level" + Number(level - 1)] = tot["level" + level];
            tempSum = tot["level" + level];
            tot["level" + level] = 0;
            tot["level" + Number(level + 1)] = 0;
            return (
              <section key={i}>
                <ul className={"place-name-" + level}>
                  <li> {place.label} </li> <li> {tempSum} </li>
                </ul>
                <section> {renderHtml} </section>
              </section>
            );
          } else {
            if (tot["level" + level])
              tot["level" + level] += Number(place.value);
            else tot["level" + level] = Number(place.value);

            if (tot["level" + Number(level - 1)])
              tot["level" + Number(level - 1)] = tot["level" + level];
            else {
              tot["level" + Number(level - 1)] = tot["level" + level];
            }

            return (
              <ul key={i}>
                <li> {place.label} </li>
                <li> {place.value} </li>
              </ul>
            );
          }
        })}
      </section>
    );
  };

  return (
    <div className="location-data-tbl">{displayLocationData(locations)}</div>
  );
}

export default ShowAllData;
