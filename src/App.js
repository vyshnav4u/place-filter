import { useEffect, useState } from "react";
import "./App.css";
import { locations } from "./data/locationData";
import ShowData from "./components/ShowData";
import SuggestPlaces from "./components/SuggestPlaces";

function App() {
  const [userInput, setUserInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [placeSuggestion, setPlaceSuggestion] = useState([]);
  const [cityInSuggestion, setCityInSuggestion] = useState([]);
  const [countryInSuggestion, setCountryInSuggestion] = useState([]);
  const [continentInSuggestion, setContinentInSuggestion] = useState([]);
  let tempCountryInSuggestion = [];
  let tempContinentInSuggestion = [];
  let tempCityInSuggestion = [];

  // # need obj {lvl1:continent,lvl2:country:lvl3:city...}

  const findMatch = (
    locationData,
    userInput,
    level,
    insertAllFlag = false,
    insertAllFlagSetLevel = 0,
    parentLabel = {},
    matchedPlace = []
  ) => {
    locationData.map((location) => {
      if ("children" in location) {
        if (location.label.toLowerCase().includes(userInput.toLowerCase())) {
          insertAllFlag = true;
          insertAllFlagSetLevel = level;
        }

        parentLabel = { ...parentLabel, ["level" + level]: location.label };
        let tempArray = findMatch(
          location.children,
          userInput,
          ++level,
          insertAllFlag,
          insertAllFlagSetLevel,
          parentLabel,
          []
        );

        matchedPlace = [...matchedPlace, ...tempArray];
        // parentLabel = {};
        const tempDeleteKey = "level" + level;
        delete parentLabel[tempDeleteKey];
        --level;
        if (level === insertAllFlagSetLevel) insertAllFlag = false;
      } else if (
        location.label.toLowerCase().includes(userInput.toLowerCase()) ||
        insertAllFlag
      ) {
        matchedPlace.push({
          ...parentLabel,
          ["level" + level]: location.label,
        });
      }
    });

    return matchedPlace;
  };

  useEffect(() => {
    let tempSuggestions = [];
    if (!userInput.trim()) {
      setPlaceSuggestion(tempSuggestions);
      return;
    }

    tempSuggestions = findMatch(locations, userInput, 0, false);
    setPlaceSuggestion(tempSuggestions);
  }, [userInput]);

  return (
    <div className="App">
      <section className="user-input-form">
        <input
          id="user-input"
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyUp={() => setShowSuggestions(true)}
          autoComplete="off"
        />
        {showSuggestions && (
          <SuggestPlaces
            placeSuggestion={placeSuggestion}
            setUserInput={setUserInput}
            setShowSuggestions={setShowSuggestions}
          />
        )}
      </section>

      <ShowData
        placeSuggestion={placeSuggestion}
        cityInSuggestion={cityInSuggestion}
        countryInSuggestion={countryInSuggestion}
        continentInSuggestion={continentInSuggestion}
      />
    </div>
  );
}

export default App;
