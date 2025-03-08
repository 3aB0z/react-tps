const initialState = {
  countries: [
    {
      code: "FR",
      name: "France",
      continent: "Europe",
      surfaceArea: 551695,
      imageUrl: "https://example.com/france.jpg",
      indepYear: 843,
      population: 67390000,
      cities: [
        {
          name: "Paris",
          district: "Île-de-France",
          population: 2161000,
          capital: true,
        },
        {
          name: "Lyon",
          district: "Auvergne-Rhône-Alpes",
          population: 522969,
          capital: false,
        },
      ],
    },
    {
      code: "MA",
      name: "Maroc",
      continent: "Afrique",
      surfaceArea: 446550,
      imageUrl: "https://example.com/maroc.jpg",
      indepYear: 1956,
      population: 36910560,
      cities: [
        {
          name: "Rabat",
          district: "Rabat-Salé-Kénitra",
          population: 577827,
          capital: true,
        },
        {
          name: "Casablanca",
          district: "Casablanca-Settat",
          population: 3359818,
          capital: false,
        },
      ],
    },
  ],
};

function paysReducer(initialState = initialState, action) {
  switch (action) {
    case "AJOUTER_PAYS":
      return initialState;

    case "MODIFIER_PAYS":
      return initialState;

    default:
      return initialState;
  }
}

export { paysReducer };
