import { useEffect, useState } from "react";

export default function Ventes({
  produits,
  setProduits,
  selectedVenteProduit,
  setSelectedVenteProduit,
  ventes,
  setVentes,
}) {
  const [search, setSearch] = useState("");
  const [searchedVentes, setSearchedVentes] = useState(ventes);

  function reduireSeul() {
    let newVentes;
    let newProduits;
    let newProduit;

    if (selectedVenteProduit.quantite <= 0) {
      newVentes = ventes.filter((item) => {
        return item.produit.id != selectedVenteProduit.id;
      });
      newProduit = {
        id: "",
        libelle: "",
        prix: 0,
        categorie: { id: "1", libelle: "fruits" },
        quantite: 0,
      };
    } else {
      newVentes = ventes.map((item) => {
        if (item.produit.id == selectedVenteProduit.id) {
          newProduit = { ...selectedVenteProduit, quantite: selectedVenteProduit.quantite - 1 };
          return {
            ...item,
            produit: { ...item.produit, quantite: item.produit.quantite - 1 },
          };
        }
        return item;
      });
      const isProduit = produits.find((item) => {
        return item.id == selectedVenteProduit.id;
      });
      if (isProduit) {
        newProduits = produits.map((item) => {
          if (item.id == selectedVenteProduit.id) {
            return { ...item, quantite: item.quantite + 1 };
          }
          return item;
        });
      } else {
        newProduits = [...produits, { ...selectedVenteProduit, quantite: 1 }];
      }
      setSearchedVentes(newVentes);
      setProduits(newProduits);
    }

    setVentes(newVentes);
    setSelectedVenteProduit(newProduit);
  }

  function reduireTout() {
    let newProduits;
    const isProduit = produits.find((item) => {
      return item.id == selectedVenteProduit.id;
    });
    if (isProduit) {
      newProduits = produits.map((item) => {
        if (item.id == selectedVenteProduit.id) {
          return {
            ...item,
            quantite: item.quantite + selectedVenteProduit.quantite,
          };
        }
        return item;
      });
    } else {
      newProduits = [...produits, { ...selectedVenteProduit, quantite: selectedVenteProduit.quantite }];
    }
    const newVentes = ventes.filter((item) => {
      return item.id != selectedVenteProduit.id;
    });

    setProduits(newProduits);
    setVentes(newVentes);
    setSelectedVenteProduit({
      id: "",
      libelle: "",
      prix: 0,
      categorie: { id: "1", libelle: "fruits" },
      quantite: 0,
    });
  }

  function acheter() {
    if (selectedVenteProduit.quantite > 0) {
      let newProduit;
      const newVentes = ventes.map((item) => {
        if (item.produit.id == selectedVenteProduit.id) {
          newProduit = { ...selectedVenteProduit, quantite: selectedVenteProduit.quantite - 1 };
          return {
            ...item,
            produit: { ...item.produit, quantite: item.produit.quantite - 1 },
            quantiteVendu: item.quantiteVendu + 1,
          };
        }
        return item;
      });

      setVentes(newVentes);
      setSelectedVenteProduit(newProduit);
    }
  }

  useEffect(() => {
    const searchedProduit = ventes.filter((item) => {
      return item.produit.libelle.toLowerCase().includes(search.toLowerCase());
    });

    setSearchedVentes([...searchedProduit]);
  }, [ventes, search]);

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-sky-600 my-8 text-4xl font-bold">
          Liste des Ventes
        </h1>
        <div>
          <label>Rechercher un produit:</label>
          <input
            type="text"
            className="border border-solid border-slate-300 bg-slate-100 rounded-2xl pl-2 ml-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <table className="mt-8 table-auto border-collapse bg-slate-700 mx-auto">
          <thead>
            <tr>
              <th className="text-white py-2 border border-slate-500 bg-slate-800">
                Id:
              </th>
              <th className="text-white py-2 border border-slate-500 bg-slate-800">
                Libelle:
              </th>
              <th className="text-white py-2 border border-slate-500 bg-slate-800">
                Prix:
              </th>
              <th className="text-white py-2 border border-slate-500 bg-slate-800">
                Categorie:
              </th>
              <th className="text-white py-2 border border-slate-500 bg-slate-800">
                Quantite:
              </th>
              <th className="text-white py-2 border border-slate-500 bg-slate-800">
                Total:
              </th>
              <th className="text-white py-2 border border-slate-500 bg-slate-800">
                Quantite vendu:
              </th>
              <th className="text-white py-2 border border-slate-500 bg-slate-800">
                Date de vente:
              </th>
            </tr>
          </thead>
          <tbody>
            {searchedVentes.map((item, index) => {
              return (
                <tr
                  key={index}
                  onClick={() =>
                    setSelectedVenteProduit({
                      id: item.produit.id,
                      libelle: item.produit.libelle,
                      categorie: item.produit.categorie,
                      prix: item.produit.prix,
                      quantite: item.produit.quantite,
                    })
                  }
                  className={`hover:bg-slate-600 cursor-pointer ${
                    item.id == selectedVenteProduit.id && "bg-slate-500"
                  }`}
                >
                  <td className="text-slate-200 p-2 border border-slate-500">
                    {item.produit.id}
                  </td>
                  <td className="text-slate-200 p-2 border border-slate-500">
                    {item.produit.libelle}
                  </td>
                  <td className="text-slate-200 p-2 border border-slate-500">
                    {item.produit.prix} DH
                  </td>
                  <td className="text-slate-200 p-2 border border-slate-500">
                    {item.produit.categorie.libelle}
                  </td>
                  <td
                    className={`${
                      item.produit.quantite > 0
                        ? "text-slate-200"
                        : "text-red-400"
                    } p-2 border border-slate-500`}
                  >
                    {item.produit.quantite > 0
                      ? item.produit.quantite
                      : "épuisé"}
                  </td>
                  <td className="text-slate-200 p-2 border border-slate-500">
                    {item.produit.quantite * item.produit.prix} DH
                  </td>
                  <td className="text-slate-200 p-2 border border-slate-500">
                    {item.quantiteVendu}
                  </td>
                  <td className="text-slate-200 p-2 border border-slate-500">
                    {item.date.toLocaleString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <button
            className="bg-orange-400 px-2 py-1 m-3 rounded-lg text-white"
            onClick={reduireSeul}
          >
            Reduire seul
          </button>

          <button
            className="bg-orange-600 px-2 py-1 m-3 rounded-lg text-white"
            onClick={reduireTout}
          >
            Reduire tout
          </button>

          <button
            className="bg-green-600 px-2 py-1 m-3 rounded-lg text-white"
            onClick={acheter}
          >
            Acheter
          </button>
        </div>
      </div>
    </>
  );
}
