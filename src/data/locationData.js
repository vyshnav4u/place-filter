// export const locations = [
//   {
//     label: "Asia",
//     children: [
//       {
//         label: "India",
//         children: [
//           {
//             label: "Delhi",
//             value: 2000,
//           },
//           {
//             label: "Chennai",
//             value: 2200,
//           },
//           {
//             label: "Mumbai",
//             value: 3000,
//           },
//           {
//             label: "Kochi",
//             value: 1200,
//           },
//           {
//             label: "Coimbatore",
//             value: 1500,
//           },
//         ],
//       },
//       {
//         label: "Japan",
//         children: [
//           {
//             label: "Tokyo",
//             value: 12300,
//           },
//           {
//             label: "Konha",
//             value: 23200,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: "America",
//     children: [
//       {
//         label: "USA",
//         children: [
//           {
//             label: "Washington DC",
//             value: 12000,
//           },
//           {
//             label: "Los Angeles",
//             value: 22000,
//           },
//           {
//             label: "New York",
//             value: 32000,
//           },
//         ],
//       },
//     ],
//   },
// ];

export const findTotalOfAllLocation = () => {
  let continentTotal = {};
  let countryTotal = {};
  let tempContinentTotal = 0;
  let tempCountryTotal = 0;
  locations.map((continent, i) => {
    tempContinentTotal = 0;
    continent.children.map((country) => {
      tempCountryTotal = 0;
      country.children.map((city) => {
        tempContinentTotal += city.value;
        tempCountryTotal += city.value;
      });
      countryTotal = { ...countryTotal, [country.label]: tempCountryTotal };
    });
    continentTotal = {
      ...continentTotal,
      [continent.label]: tempContinentTotal,
    };
  });

  return { continentTotal, countryTotal };
};
export const findTotalOfFilterTable = (
  cityInSuggestion,
  countryInSuggestion,
  continentInSuggestion
) => {
  let continentTotal = {};
  let countryTotal = {};
  let tempContinentTotal = 0;
  let tempCountryTotal = 0;
  locations.map((continent, i) => {
    if (!continentInSuggestion.includes(continent.label)) return;
    tempContinentTotal = 0;
    continent.children.map((country) => {
      if (!countryInSuggestion.includes(country.label)) return;
      tempCountryTotal = 0;
      country.children.map((city) => {
        if (!cityInSuggestion.includes(city.label)) return;
        tempContinentTotal += city.value;
        tempCountryTotal += city.value;
      });
      countryTotal = { ...countryTotal, [country.label]: tempCountryTotal };
    });
    continentTotal = {
      ...continentTotal,
      [continent.label]: tempContinentTotal,
    };
  });

  return { continentTotal, countryTotal };
};
