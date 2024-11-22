export function add_produit(newProduit) {
  return {
    type: "ADD_PRODUIT",
    payload: newProduit,
  };
}

export function delete_produit(idProduit) {
  return {
    type: "DELETE_PRODUIT",
    payload: idProduit,
  };
}
