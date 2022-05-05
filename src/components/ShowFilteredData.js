import React from "react";
import { locations } from "../data/locationData";

function ShowFilteredData(props) {
  const placesInSuggestions = props.placesInSuggestions;
  console.log(placesInSuggestions);
  const displayLocationData = (location, level = 0) => {
    return (
      <section className="place-data">
        {location.map((place, i) => {
          if (
            !placesInSuggestions["level" + level].includes(
              place["label"].toLowerCase()
            )
          )
            return;
          if ("children" in place) {
            const renderHtml = displayLocationData(place.children, ++level);
            --level;
            return (
              <section key={i}>
                <ul>
                  <li> {place.label} </li> <li> Total </li>
                </ul>
                <li> {renderHtml} </li>
              </section>
            );
          } else {
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

export default ShowFilteredData;
