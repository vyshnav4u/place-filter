import React from "react";
import { locations } from "../data/locationData";
import { continentTotal, countryTotal } from "../data/locationData";

function ShowAllData() {
  return (
    <div className="location-data-tbl">
      {locations.map((continent, i) => {
        return (
          <section className="location-tbl-data" key={i}>
            <ul className="tbl-continent-data">
              <li> {continent.label} </li>
              <li> {continentTotal[continent.label]} </li>
            </ul>

            {continent.children.map((country, j) => {
              return (
                <section key={j}>
                  <ul className="tbl-country-data">
                    <li> {country.label} </li>
                    <li> {countryTotal[country.label]} </li>
                  </ul>
                  {country.children.map((city, k) => {
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

export default ShowAllData;
