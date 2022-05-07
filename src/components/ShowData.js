import React from "react";
import ShowAllData from "./ShowAllData";
import ShowFilteredData from "./ShowFilteredData";

function ShowData(props) {
  const placeSuggestion = props.placeSuggestion;
  const placesInSuggestions = props.placesInSuggestions;

  let showFilteredTable = false;
  if (placeSuggestion.length > 0) showFilteredTable = true;
  return (
    <>
      {showFilteredTable && (
        <ShowFilteredData placesInSuggestions={placesInSuggestions} />
      )}
      {!showFilteredTable && <ShowAllData />}
    </>
  );
}

export default ShowData;
