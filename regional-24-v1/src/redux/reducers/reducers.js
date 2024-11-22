const initState = {
  produits: [
    { ref: 7, nom: "PC HP", categorie: "informatique" },
    { ref: 8, nom: "SKYWORTH", categorie: "TV" },
  ],
};

export default function reducers(state = initState, action) {
  switch (action.type) {
    case "ADD_PRODUIT":
      return {
        ...state,
        produits: [...state.produits, action.payload],
      };
    case "DELETE_PRODUIT":
      return {
        ...state,
        produits: [
          ...state.produits.filter((item) => item.ref !== action.payload),
        ],
      };
    default:
      return state;
  }
}
