import React from "react";

function SuggestPlaces(props) {
  const placeSuggestion = props.placeSuggestion;
  const setUserInput = props.setUserInput;
  const setShowSuggestions = props.setShowSuggestions;
  // let numberOfLevels = 0;
  // if (placeSuggestion.length > 0)
  //   numberOfLevels = Object.keys(placeSuggestion[0]).length;

  return (
    <ul className="suggestion-wrap">
      {placeSuggestion.map((place, i) => {
        console.log(place);
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
            {Object.keys(place).map((levelNumber, i) => {
              {
                if (i === 0) return place[levelNumber];
                return " >> " + place[levelNumber];
              }
            })}
            {/* {place.continentName} {">>"} {place.countryName} {">>"}
            {place.cityName} */}
          </li>
        );
      })}
    </ul>
  );
}

export default SuggestPlaces;
