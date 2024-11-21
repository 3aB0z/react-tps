import { useState } from "react";
import { Link } from "react-router-dom";

export default function AjouterProduit({ produits, setProduits, categories }) {
  const [form, setForm] = useState({
    id: "",
    libelle: "",
    prix: 0,
    categorie: { id: "1", libelle: "fruits" },
    quantite: 0,
  });

  function changeInputValue(e) {
    const value = e.target.value;
    const name = e.target.name;
    let newValue = { ...form };

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

    setForm({ ...newValue });
  }

  function ajouter() {
    setProduits([...produits, form]);
    setForm({
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
            value={form.id}
            onChange={changeInputValue}
            name="id"
          />
          <label className="mt-4">Libelle:</label>
          <input
            type="text"
            value={form.libelle}
            onChange={changeInputValue}
            name="libelle"
          />
          <label className="mt-4">Prix:</label>
          <input
            type="number"
            value={form.prix}
            onChange={changeInputValue}
            name="prix"
          />
          <label className="mt-4">Categorie:</label>
          <select
            value={form.categorie.id}
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
            value={form.quantite}
            onChange={changeInputValue}
            name="quantite"
          />
          <Link
            to="/"
            className="bg-green-500 px-3 py-2 mt-8 rounded-lg text-white"
            onClick={ajouter}
          >
            Ajouter
          </Link>
        </div>
      </div>
    </>
  );
}
