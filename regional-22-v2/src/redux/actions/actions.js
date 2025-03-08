function fetchPays() {
  return {
    action: "",
    payload: {},
  };
}

function ajouterPays(newPays) {
  return {
    action: "AJOUTER_PAYS",
    payload: newPays,
  };
}

function modifierPays(newPays) {
  return {
    action: "MODIFIER_PAYS",
    payload: newPays,
  };
}

export { fetchPays, ajouterPays, modifierPays };
