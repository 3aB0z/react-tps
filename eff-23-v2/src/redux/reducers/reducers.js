const initialState = {
  ListeSimulation: [
    {
      id: 3000000,
      Droits_en: 120000,
      Conservation: 45200,
      Date: "11/22/2024",
      total: 207950,
    },
  ],
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case "AJOUTER":
      return {
        ...state,
        ListeSimulation: [...state.ListeSimulation, action.payload],
      };
    case "":
      return {
        ...state,
        ListeSimulation: [],
      };
    default:
      return state;
  }
}
