import { Link } from "react-router-dom";

export default function ModifierProduit({
  produits,
  setProduits,
  selectedProduit,
  setSelectedProduit,
  categories,
}) {
  function changeInputValue(e) {
    const value = e.target.value;
    const name = e.target.name;
    let newValue = { ...selectedProduit };

    if (name === "categorie") {
      const selectedCategory = categories.find((item) => {
        return item.id == value;
      });
      if (selectedCategory) {
        newValue.categorie = {
          id: selectedCategory.id,
          libelle: selectedCategory.libelle,
        };
      }
    } else {
      newValue[name] = value;
    }

    setSelectedProduit(newValue);
  }

  function modifier() {
    const newProduits = produits.map((item) => {
      if (item.id == selectedProduit.id){
        item = { ...selectedProduit };
      }
      return item;
    });
    setProduits(newProduits);
    setSelectedProduit({
      id: "",
      libelle: "",
      prix: 0,
      categorie: { id: "1", libelle: "fruits" },
      quantite: 0,
    });
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-slate-300 py-12 px-24 m-12 flex flex-col items-center">
          <label className="mt-4">Id:</label>
          <input
            type="number"
            value={selectedProduit.id}
            onChange={changeInputValue}
            name="id"
          />
          <label className="mt-4">Libelle:</label>
          <input
            type="text"
            value={selectedProduit.libelle}
            onChange={changeInputValue}
            name="libelle"
          />
          <label className="mt-4">Prix:</label>
          <input
            type="number"
            value={selectedProduit.prix}
            onChange={changeInputValue}
            name="prix"
          />
          <label className="mt-4">Categorie:</label>
          <select
            value={selectedProduit.categorie.id}
            onChange={changeInputValue}
            name="categorie"
          >
            {categories.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.libelle}
                </option>
              );
            })}
          </select>
          <label className="mt-4">Quantite:</label>
          <input
            type="number"
            value={selectedProduit.quantite}
            onChange={changeInputValue}
            name="quantite"
          />
          <Link
            to="/"
            className="bg-green-500 px-3 py-2 mt-8 rounded-lg text-white"
            onClick={modifier}
          >
            Modifier
          </Link>
        </div>
      </div>
    </>
  );
}
