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

  useEffect(() => {
    const tempSuggestions = [];
    if (!userInput) {
      setPlaceSuggestion(tempSuggestions);
      return;
    }

    tempCountryInSuggestion = [];
    tempContinentInSuggestion = [];
    tempCityInSuggestion = [];

    locations.forEach((continent) => {
      continent.children.forEach((country) => {
        country.children.forEach((city) => {
          const cityData = {
            cityName: city.label,
            countryName: country.label,
            continentName: continent.label,
          };

          if (
            city.label.toLowerCase().includes(userInput.toLowerCase()) ||
            country.label.toLowerCase() === userInput.toLowerCase() ||
            continent.label.toLowerCase() === userInput.toLowerCase()
          ) {
            tempSuggestions.push(cityData);
            if (!tempCountryInSuggestion.includes(country.label)) {
              tempCountryInSuggestion.push(country.label);
            }
            if (!tempContinentInSuggestion.includes(continent.label))
              tempContinentInSuggestion.push(continent.label);

            if (!tempCityInSuggestion.includes(city.label))
              tempCityInSuggestion.push(city.label);
          }
        });
      });
    });

    setCityInSuggestion(tempCityInSuggestion);
    setCountryInSuggestion(tempCountryInSuggestion);
    setContinentInSuggestion(tempContinentInSuggestion);
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
