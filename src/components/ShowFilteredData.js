// import React from "react";
// import { locations } from "../data/locationData";
// import { findTotalOfFilterTable } from "../data/locationData";

// function ShowFilteredData(props) {
//   const continentInSuggestion = props.continentInSuggestion;
//   const countryInSuggestion = props.countryInSuggestion;
//   const cityInSuggestion = props.cityInSuggestion;
//   const { continentTotal, countryTotal } = findTotalOfFilterTable(
//     cityInSuggestion,
//     countryInSuggestion,
//     continentInSuggestion
//   );
//   return (
//     <div className="location-data-tbl">
//       {locations.map((continent, i) => {
//         if (!continentInSuggestion.includes(continent.label)) return;

//         return (
//           <section className="location-tbl-data" key={i}>
//             <ul className="tbl-continent-data">
//               <li> {continent.label} </li>
//               <li> {continentTotal[continent.label]} </li>
//             </ul>

//             {continent.children.map((country, j) => {
//               if (!countryInSuggestion.includes(country.label)) return;
//               return (
//                 <section key={j}>
//                   <ul className="tbl-country-data">
//                     <li> {country.label} </li>
//                     <li> {countryTotal[country.label]} </li>
//                   </ul>
//                   {country.children.map((city, k) => {
//                     if (!cityInSuggestion.includes(city.label)) return;
//                     return (
//                       <section key={k}>
//                         <ul className="tbl-city-data">
//                           <li> {city.label} </li>
//                           <li> {city.value} </li>
//                         </ul>
//                       </section>
//                     );
//                   })}
//                 </section>
//               );
//             })}
//           </section>
//         );
//       })}
//     </div>
//   );
// }

// export default ShowFilteredData;

import React from "react";
import { locations } from "../data/locationData";

function ShowFilteredData(props) {
  const displayLocationData = (location) => {
    return (
      <section className="place-data">
        {location.map((place, i) => {
          if ("children" in place) {
            return (
              <section>
                <ul>
                  <li> {place.label} </li> <li> Total </li>
                </ul>
                <li> {displayLocationData(place.children)} </li>
              </section>
            );
          } else {
            return (
              <ul>
                <li> {place.label} </li>
                <li> {place.value} </li>
              </ul>
            );
          }
          return <p key={i}>Yes</p>;
        })}
      </section>
    );
  };

  return (
    <div className="location-data-tbl">{displayLocationData(locations)}</div>
  );
}

export default ShowFilteredData;
