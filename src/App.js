import { useEffect, useState } from "react";
import "./App.css";
import { locations } from "./data/locationData";
import ShowData from "./components/ShowData";

function App() {
  const [userInput, setUserInput] = useState("");
  const [placeSuggestion, setPlaceSuggestion] = useState([]);
  const [countryInSuggestion, setCountryInSuggestion] = useState([]);
  const [continentInSuggestion, setContinentInSuggestion] = useState([]);
  let tempCountryInSuggestion = [];
  let tempContinentInSuggestion = [];

  useEffect(() => {
    const tempSuggestions = [];
    if (!userInput) {
      setPlaceSuggestion(tempSuggestions);
      return;
    }

    tempCountryInSuggestion = [];
    tempContinentInSuggestion = [];

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
          }
        });
      });
    });

    setCountryInSuggestion(tempCountryInSuggestion);
    setContinentInSuggestion(tempContinentInSuggestion);
    setPlaceSuggestion(tempSuggestions);
  }, [userInput]);

  return (
    <div className="App">
      <form>
        <input
          id="user-input"
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          autoComplete="off"
        />
      </form>
      <section className="suggestion-wrap">
        {placeSuggestion.map((place, i) => {
          return <p key={i}>{place.cityName}</p>;
        })}
      </section>
      <ShowData
        placeSuggestion={placeSuggestion}
        countryInSuggestion={countryInSuggestion}
        continentInSuggestion={continentInSuggestion}
      />
    </div>
  );
}

export default App;
