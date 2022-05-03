import React from "react";
import ShowAllData from "./ShowAllData";

function ShowData(props) {
  console.log(props.countryInSuggestion);
  console.log(props.continentInSuggestion);
  return (
    <>
      <ShowAllData />
    </>
  );
}

export default ShowData;
