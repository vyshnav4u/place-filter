import React from "react";

function SuggestPlaces(props) {
  const placeSuggestion = props.placeSuggestion;
  const setUserInput = props.setUserInput;
  const showSuggestions = props.showSuggestions;
  const setShowSuggestions = props.setShowSuggestions;

  // close suggestion when clicked outside
  document.addEventListener("click", (e) => {
    if (e.target.className !== "inside-suggestion") setShowSuggestions(false);
    if (e.target.className === "inside-suggestion") setShowSuggestions(true);
  });

  let numberOfLevels = 0;
  if (placeSuggestion.length > 0)
    numberOfLevels = Object.keys(placeSuggestion[0]).length;

  return (
    <ul className="suggestion-wrap inside-suggestion">
      {placeSuggestion.map((place, i) => {
        return (
          <li
            className="inside-suggestion"
            onClick={(e) =>
              setUserInput(() => {
                setShowSuggestions(false);
                return place["level" + Number(numberOfLevels - 1)];
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
          </li>
        );
      })}
    </ul>
  );
}

export default SuggestPlaces;
