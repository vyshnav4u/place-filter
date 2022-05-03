import React from "react";
import { locations } from "../data/locationData";
import { continentTotal, countryTotal } from "../data/locationData";

function ShowFilteredData(props) {
  const continentInSuggestion = props.continentInSuggestion;
  const countryInSuggestion = props.countryInSuggestion;
  const cityInSuggestion = props.cityInSuggestion;
  console.log(cityInSuggestion);
  return (
    <div>
      <h2> Filtered Data </h2>
      {locations.map((continent, i) => {
        if (!continentInSuggestion.includes(continent.label)) return;

        return (
          <section className="location-tbl-data" key={i}>
            <ul className="tbl-continent-data">
              <li> {continent.label} </li>
              <li> {continentTotal[continent.label]} </li>
            </ul>

            {continent.children.map((country, j) => {
              if (!countryInSuggestion.includes(country.label)) return;
              return (
                <section key={j}>
                  <ul className="tbl-country-data">
                    <li> {country.label} </li>
                    <li> {countryTotal[country.label]} </li>
                  </ul>
                  {country.children.map((city, k) => {
                    if (!cityInSuggestion.includes(city.label)) return;
                    return (
                      <section key={k}>
                        <ul className="tbl-city-data">
                          <li> {city.label} </li>
                          <li> {city.value} </li>
                        </ul>
                      </section>
                    );
                  })}
                </section>
              );
            })}
          </section>
        );
      })}
    </div>
  );
}

export default ShowFilteredData;
