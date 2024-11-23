export function ajouter(newSimulation) {
  return {
    type: "AJOUTER",
    payload: newSimulation,
  };
}

export function vider() {
  return {
    type: "VIDER",
    payload: "",
  };
}
