import { annonces, categories, regions, users } from "../../db";

const initialState = {
  annonces,
  categories,
  regions,
  users,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "AFFICHER_DONNEES":
      return { ...state };
    case "INSERER_ANNONCE":
      return { ...state, annonces: [...state.annonces, action.payload] };
    case "MODIFIER_ANNONCE":
      return {
        ...state,
        annonces: [
          ...state.annonces.map((item) => {
            if (item.id == action.payload.id) {
              return { ...action.payload };
            }
            return item;
          }),
        ],
      };
    case "SUPPRIMER_ANNONCE":
      return {
        ...state,
        annonces: [
          ...state.annonces.filter((item) => item.id != action.payload),
        ],
      };
    case "INSCRIR":
      return { ...state, users: [...state.users, action.payload] };

    default:
      return { ...state };
  }
}

export { reducer };
