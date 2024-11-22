import { useEffect } from "react";
import { useState } from "react";

export default function InfoProd() {
  const [form, setForm] = useState({
    id: "",
    nomP: "",
    categorie: { idC: 1, nomC: "Déjeuner" },
    descP: "",
    prixP: 0,
    thumbnail: "",
  });
  const [displayedProduit, setDisplayedProduit] = useState();

  const [categories, setCategories] = useState([]);

  function changeInputValue(e) {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "thumbnail") {
      setForm({ ...form, [name]: e.target.files[0].name });
    } else if (name === "categorie") {
      setForm({
        ...form,
        [name]: { idC: value, nomC: getCategorieById().libelle },
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  }

  function getCategorieById() {
    return categories.find((item) => item.id == form.categorie.idC);
  }

  useEffect(() => {
    const initialCategories = [
      { id: 1, libelle: "Déjeuner" },
      { id: 2, libelle: "Dîner" },
      { id: 3, libelle: "Collation" },
    ];

    setCategories(initialCategories);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-slate-200 py-4 px-24 mt-10 mx-12 flex flex-col items-center rounded-3xl">
          <h1 className="text-sky-600 my-8 text-4xl font-bold">
            Gestion des Produits:
          </h1>
          <label className="mt-4">Reference:</label>
          <input
            type="text"
            value={form.id}
            onChange={changeInputValue}
            name="id"
          />
          <label className="mt-4">Nom Produit:</label>
          <input
            type="text"
            value={form.nomP}
            onChange={changeInputValue}
            name="nomP"
          />
          <label className="mt-4">Categorie Produit:</label>
          <select
            className="mt-4"
            value={form.categorie.idC}
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
          <label className="mt-4">Description:</label>
          <textarea
            value={form.descP}
            onChange={changeInputValue}
            name="descP"
          ></textarea>
          <label className="mt-4">Prix:</label>
          <input
            type="number"
            value={form.prixP}
            onChange={changeInputValue}
            name="prixP"
          />
          <label className="mt-4">Image Produit:</label>
          <input type="file" onChange={changeInputValue} name="thumbnail" />
          <button
            className="bg-green-500 px-3 py-2 mt-4 rounded-lg text-white"
            onClick={() => setDisplayedProduit({ ...form })}
          >
            Valider
          </button>
        </div>
        <div className="flex flex-col items-center border-2 border-black">
          Information Produit:
          {displayedProduit && (
            <ul>
              <li>Reference Produit:{displayedProduit.id}</li>
              <li>Nom:{displayedProduit.nomP}</li>
              <li>Categorie:{displayedProduit.categorie.nomC}</li>
              <li>Prix:{displayedProduit.prixP}</li>
              <li>Image:{displayedProduit.thumbnail}</li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
