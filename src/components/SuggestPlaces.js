import React from "react";

function SuggestPlaces(props) {
  const placeSuggestion = props.placeSuggestion;
  const setUserInput = props.setUserInput;
  const setShowSuggestions = props.setShowSuggestions;
  return (
    <ul className="suggestion-wrap">
      {placeSuggestion.map((place, i) => {
        return (
          <li
            onClick={(e) =>
              setUserInput(() => {
                setShowSuggestions(false);
                return place.cityName;
              })
            }
            key={i}
          >
            {place.continentName} {">>"} {place.countryName} {">>"}
            {place.cityName}
          </li>
        );
      })}
    </ul>
  );
}

export default SuggestPlaces;
