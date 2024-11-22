const initialState = {
  clients: [
    { numero: "1", nom: "N1", prenom: "P1" },
    { numero: "2", nom: "N2", prenom: "P2" },
    { numero: "3", nom: "N3", prenom: "P3" },
  ],
  produits: [
    { codeProduit: "100", intitule: "Produit1", prix: 10, qteStockee: 18 },
    { codeProduit: "20", intitule: "Produit2", prix: 20, qteStockee: 14 },
    { codeProduit: "35", intitule: "Produit3", prix: 30, qteStockee: 6 },
  ],
  achats: [
    { numero: "1", codeProduit: "100", qte: 7 },
    { numero: "2", codeProduit: "100", qte: 13 },
    { numero: "3", codeProduit: "20", qte: 10 },
  ],
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case "AJOUTER_ACHAT":
      return { ...state, achats: [...state.achats, action.payload] };
    case "MODIFIER_ACHAT":
      return {
        ...state,
        achats: [
          ...state.achats.map((item) => {
            if (item.numero === action.payload.numero) {
              return action.payload;
            }
            return item;
          }),
        ],
      };
    case "SUPPRIMER_ACHAT":
      return {
        ...state,
        achats: [
          ...state.achats.filter(function (item) {
            return item.numero != action.payload;
          }),
        ],
      };

    case "MODIFIER_PRODUCT":
      return {
        ...state,
        produits: [
          ...state.produits.map((item) => {
            if (item.codeProduit === action.payload.codeProduit) {
              return action.payload;
            }
            return item;
          }),
        ],
      };

    default:
      return state;
  }
}

export default reducers;
