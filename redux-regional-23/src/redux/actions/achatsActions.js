export function ajouterAchatAction(newProduct) {
  return {
    type: "AJOUTER_ACHAT",
    payload: newProduct,
  };
}
export function modifierAchatAction(newProduct) {
  return {
    type: "MODIFIER_ACHAT",
    payload: newProduct,
  };
}
export function supprimerAchatAction(idProduct) {
  return {
    type: "SUPPRIMER_ACHAT",
    payload: idProduct,
  };
}
