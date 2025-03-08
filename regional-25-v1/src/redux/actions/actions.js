function afficher_donnees() {
  return {
    type: "AFFICHER_DONNEES",
    payload: {},
  };
}

function inserer(newAnnonce) {
  return {
    type: "INSERER_ANNONCE",
    payload: newAnnonce,
  };
}

function modifier(newAnnonce) {
  return {
    type: "MODIFIER_ANNONCE",
    payload: newAnnonce,
  };
}

function supprimer(annonceId) {
  return {
    type: "SUPPRIMER_ANNONCE",
    payload: annonceId,
  };
}

function inscrir(newUser) {
  return {
    type: "INSCRIR",
    payload: newUser,
  };
}

function connecter() {
  return {
    type: "CONNECTER",
    payload: {},
  };
}

function deconnecter() {
  return {
    type: "DECONNECTER",
    payload: {},
  };
}

export {
  afficher_donnees,
  inserer,
  modifier,
  supprimer,
  inscrir,
  connecter,
  deconnecter,
};
