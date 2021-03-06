import { useEffect, useState } from "react";
import "./App.css";
import { locations } from "./data/locationData";
import ShowData from "./components/ShowData";
import SuggestPlaces from "./components/SuggestPlaces";

function App() {
  const [userInput, setUserInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [placeSuggestion, setPlaceSuggestion] = useState([]);
  const [placesInSuggestions, setPlacesInSuggestions] = useState({});
  let tempPlacesInSuggestions = {};

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
        const insertSuggestion = {
          ...parentLabel,
          ["level" + level]: location.label,
        };

        const allKeys = Object.keys(insertSuggestion);

        for (let key of allKeys) {
          if (tempPlacesInSuggestions.hasOwnProperty(key)) {
            if (
              !tempPlacesInSuggestions[key].includes(
                insertSuggestion[key].toLowerCase()
              )
            ) {
              tempPlacesInSuggestions[key].push(
                insertSuggestion[key].toLowerCase()
              );
            }
          } else {
            tempPlacesInSuggestions[key] = [
              insertSuggestion[key].toLowerCase(),
            ];
          }
        }

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
    setPlacesInSuggestions(tempPlacesInSuggestions);
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
          className="inside-suggestion"
        />
        {showSuggestions && (
          <SuggestPlaces
            placeSuggestion={placeSuggestion}
            setUserInput={setUserInput}
            showSuggestions={showSuggestions}
            setShowSuggestions={setShowSuggestions}
          />
        )}
      </section>

      <ShowData
        placeSuggestion={placeSuggestion}
        placesInSuggestions={placesInSuggestions}
      />
    </div>
  );
}

export default App;
