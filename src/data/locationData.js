export const locations = [
  {
    label: "Asia",
    children: [
      {
        label: "India",
        children: [
          {
            label: "Delhi",
            value: 2000,
          },
          {
            label: "Chennai",
            value: 2200,
          },
          {
            label: "Mumbai",
            value: 3000,
          },
          {
            label: "Kochi",
            value: 1200,
          },
          {
            label: "Coimbatore",
            value: 1500,
          },
        ],
      },
    ],
  },
  {
    label: "America",
    children: [
      {
        label: "USA",
        children: [
          {
            label: "Washington DC",
            value: 12000,
          },
          {
            label: "Los Angeles",
            value: 22000,
          },
          {
            label: "New York",
            value: 32000,
          },
        ],
      },
    ],
  },
];

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
  continentTotal = { ...continentTotal, [continent.label]: tempContinentTotal };
});

export { continentTotal, countryTotal };
