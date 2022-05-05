import React from "react";
import ShowAllData from "./ShowAllData";
import ShowFilteredData from "./ShowFilteredData";

function ShowData(props) {
  const placeSuggestion = props.placeSuggestion;
  const cityInSuggestion = props.cityInSuggestion;
  const countryInSuggestion = props.countryInSuggestion;
  const continentInSuggestion = props.continentInSuggestion;
  const placesInSuggestions = props.placesInSuggestions;

  let showFilteredTable = false;
  if (placeSuggestion.length > 0) showFilteredTable = true;
  return (
    <>
      {showFilteredTable && (
        <ShowFilteredData
          cityInSuggestion={cityInSuggestion}
          countryInSuggestion={countryInSuggestion}
          continentInSuggestion={continentInSuggestion}
          placesInSuggestions={placesInSuggestions}
        />
      )}
      {!showFilteredTable && <ShowAllData />}
    </>
  );
}

export default ShowData;
