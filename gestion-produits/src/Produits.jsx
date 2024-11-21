import { Link } from "react-router-dom";

export default function Produits({
  produits,
  setProduits,
  selectedProduit,
  setSelectedProduit,
  ventes,
  setVentes,
}) {
  function vendreSeul() {
    let newProduits;
    let newVentes;
    let newProduit;

    if (selectedProduit.quantite <= 1) {
      newProduits = produits.filter((item) => {
        return item.id != selectedProduit.id;
      });
      newProduit = {
        id: "",
        libelle: "",
        prix: 0,
        categorie: { id: "1", libelle: "fruits" },
        quantite: 0,
      };
    } else {
      newProduits = produits.map((item) => {
        if (item.id == selectedProduit.id) {
          newProduit = { ...selectedProduit, quantite: selectedProduit.quantite - 1 };
          return { ...item, quantite: item.quantite - 1 };
        }
        return item;
      });
    }
    const isVente = ventes.find((vente) => {
      return vente.produit.id == selectedProduit.id;
    });
    if (isVente) {
      newVentes = ventes.map((item) => {
        if (item.produit.id == isVente.id) {
          return {
            ...item,
            produit: { ...item.produit, quantite: item.produit.quantite + 1 },
          };
        }
        return item;
      });
    } else {
      newVentes = [
        ...ventes,
        {
          id: selectedProduit.id,
          produit: { ...selectedProduit, quantite: 1 },
          date: new Date(),
          quantiteVendu: 0,
        },
      ];
    }

    setProduits(newProduits);
    setVentes(newVentes);
    setSelectedProduit(newProduit);
  }

  function vendreTout() {
    let newVentes;
    const isVente = ventes.find((item) => {
      return item.produit.id == selectedProduit.id;
    });
    if (isVente) {
      newVentes = ventes.map((item) => {
        if (item.produit.id == selectedProduit.id) {
          return {
            ...item,
            produit: {
              ...item.produit,
              quantite: item.produit.quantite + selectedProduit.quantite,
            },
          };
        }
        return item;
      });
    } else {
      newVentes = [
        ...ventes,
        {
          id: selectedProduit.id,
          produit: { ...selectedProduit },
          date: new Date(),
          quantiteVendu: 0,
        },
      ];
    }
    const newProduits = produits.filter((item) => {
      return item.id != selectedProduit.id;
    });

    setVentes(newVentes);
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
      <div className="flex flex-col items-center">
        <h1 className="text-sky-600 mt-8 text-4xl font-bold">
          Liste des Produits
        </h1>
        <table className="mt-8 border-collapse bg-slate-700 mx-auto">
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
            </tr>
          </thead>
          <tbody>
            {produits.map((item, index) => {
              return (
                <tr
                  key={index}
                  onClick={() =>
                    setSelectedProduit({
                      id: item.id,
                      libelle: item.libelle,
                      categorie: item.categorie,
                      prix: item.prix,
                      quantite: item.quantite,
                    })
                  }
                  className={`hover:bg-slate-600 cursor-pointer ${
                    item.id == selectedProduit.id && "bg-slate-500"
                  }`}
                >
                  <td className="text-slate-200 p-2 border border-slate-500">
                    {item.id}
                  </td>
                  <td className="text-slate-200 p-2 border border-slate-500">
                    {item.libelle}
                  </td>
                  <td className="text-slate-200 p-2 border border-slate-500">
                    {item.prix} DH
                  </td>
                  <td className="text-slate-200 p-2 border border-slate-500">
                    {item.categorie.libelle}
                  </td>
                  <td className="text-slate-200 p-2 border border-slate-500">
                    {item.quantite}
                  </td>
                  <td className="text-slate-200 p-2 border border-slate-500">
                    {item.quantite * item.prix} DH
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
        <br />
        <div>
          <Link
            className="bg-green-500 px-3 py-2 ml-8 rounded-lg text-white"
            to="/Produits/AjouterProduit"
          >
            Ajouter Produit
          </Link>
          <Link
            className="bg-yellow-500 px-3 py-2 ml-8 rounded-lg text-white"
            to="/Produits/ModifierProduit"
          >
            Modifier Produit
          </Link>
          <Link
            className="bg-red-500 px-3 py-2 ml-8 rounded-lg text-white"
            to="/Produits/SupprimerProduit"
          >
            Supprimer Produit
          </Link>
          <button
            className="bg-orange-400 px-3 py-2 ml-8 rounded-lg text-white"
            onClick={vendreSeul}
          >
            Vendre seul
          </button>
          <button
            className="bg-orange-600 px-3 py-2 ml-8 rounded-lg text-white"
            onClick={vendreTout}
          >
            Vendre tout
          </button>
        </div>
      </div>
    </>
  );
}
