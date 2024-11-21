import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Ventes from "./Ventes";
import Produits from "./Produits";
import AjouterProduit from "./AjouterProduit";
import ModifierProduit from "./ModifierProduit";
import SupprimerProduit from "./SupprimerProduit";

function App() {
  const [produits, setProduits] = useState([]);
  const [selectedProduit, setSelectedProduit] = useState({
    id: "",
    libelle: "",
    prix: 0,
    categorie: { id: "1", libelle: "fruits" },
    quantite: 0,
  });
  const [selectedVenteProduit, setSelectedVenteProduit] = useState({
    id: "",
    libelle: "",
    prix: 0,
    categorie: { id: "1", libelle: "fruits" },
    quantite: 0,
  });
  const [categories, setCategories] = useState([]);
  const [ventes, setVentes] = useState([]);

  useEffect(() => {
    const initialProduits = [
      {
        id: 1,
        libelle: "Apple",
        categorie: { id: 1, libelle: "fruits" },
        prix: 6,
        quantite: 13,
      },
      {
        id: 2,
        libelle: "Orange",
        categorie: { id: 1, libelle: "fruits" },
        prix: 7,
        quantite: 23,
      },
      {
        id: 3,
        libelle: "Tomato",
        categorie: { id: 2, libelle: "vegetables" },
        prix: 12,
        quantite: 14,
      },
      {
        id: 4,
        libelle: "Potato",
        categorie: { id: 2, libelle: "vegetables" },
        prix: 8,
        quantite: 16,
      },
      {
        id: 5,
        libelle: "Carrot",
        categorie: { id: 2, libelle: "vegetables" },
        prix: 13,
        quantite: 9,
      },
    ];
    const initialVentes = [
      {
        id: 1,
        produit: {
          id: 1,
          libelle: "Apple",
          categorie: { id: 1, libelle: "fruits" },
          prix: 6,
          quantite: 3,
        },
        date: new Date(),
        quantiteVendu: 10,
      },
      {
        id: 2,
        produit: {
          id: 2,
          libelle: "Orange",
          categorie: { id: 1, libelle: "fruits" },
          prix: 7,
          quantite: 9,
        },
        date: new Date(),
        quantiteVendu: 8,
      },
      {
        id: 3,
        produit: {
          id: 3,
          libelle: "Tomato",
          categorie: { id: 2, libelle: "vegetables" },
          prix: 12,
          quantite: 4,
        },
        date: new Date(),
        quantiteVendu: 13,
      },
      {
        id: 4,
        produit: {
          id: 4,
          libelle: "Potato",
          categorie: { id: 2, libelle: "vegetables" },
          prix: 8,
          quantite: 6,
        },
        date: new Date(),
        quantiteVendu: 4,
      },
      {
        id: 5,
        produit: {
          id: 5,
          libelle: "Carrot",
          categorie: { id: 2, libelle: "vegetables" },
          prix: 13,
          quantite: 7,
        },
        date: new Date(),
        quantiteVendu: 6,
      },
    ];
    const initialCategories = [
      { id: 1, libelle: "fruits" },
      { id: 2, libelle: "vegetables" },
    ];
    setProduits(initialProduits);
    setVentes(initialVentes);
    setCategories(initialCategories);
  }, []);

  return (
    <>
      <div>
        <header className="bg-slate-100 h-20 w-full flex flex-row justify-center items-center">
          <Link className="bg-blue-500 px-3 py-2 rounded-lg text-white" to="/">
            Produits
          </Link>
          <Link
            className="bg-sky-500 px-3 py-2 ml-8 rounded-lg text-white"
            to="/ventes"
          >
            Ventes
          </Link>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <Produits
                produits={produits}
                setProduits={(value) => setProduits(value)}
                selectedProduit={selectedProduit}
                setSelectedProduit={(value) => setSelectedProduit(value)}
                ventes={ventes}
                setVentes={(value) => setVentes(value)}
              />
            }
          />
          <Route
            path="/Produits/AjouterProduit"
            element={
              <AjouterProduit
                produits={produits}
                setProduits={(value) => setProduits(value)}
                categories={categories}
              />
            }
          />
          <Route
            path="/Produits/ModifierProduit"
            element={
              <ModifierProduit
                produits={produits}
                setProduits={(value) => setProduits(value)}
                selectedProduit={selectedProduit}
                setSelectedProduit={(value) => setSelectedProduit(value)}
                categories={categories}
              />
            }
          />
          <Route
            path="/Produits/SupprimerProduit"
            element={
              <SupprimerProduit
                produits={produits}
                setProduits={(value) => setProduits(value)}
                selectedProduit={selectedProduit}
              />
            }
          />
          <Route
            path="/ventes"
            element={
              <Ventes
                produits={produits}
                setProduits={(value) => setProduits(value)}
                selectedVenteProduit={selectedVenteProduit}
                setSelectedVenteProduit={(value) => setSelectedVenteProduit(value)}
                ventes={ventes}
                setVentes={(value) => setVentes(value)}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
