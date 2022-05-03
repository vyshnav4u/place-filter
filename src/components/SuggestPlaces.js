import React from "react";

function SuggestPlaces(props) {
  const placeSuggestion = props.placeSuggestion;
  return (
    <ul className="suggestion-wrap">
      {placeSuggestion.map((place, i) => {
        return (
          <li key={i}>
            {place.continentName} {">>"} {place.countryName} {">>"}
            {place.cityName}
          </li>
        );
      })}
    </ul>
  );
}

export default SuggestPlaces;
