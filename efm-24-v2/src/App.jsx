import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import DetailsLivre from "./DetailsLivre";

function App() {
  const [total, setTotal] = useState(0);
  const [panier, setPanier] = useState([]);
  const [livres, setLivres] = useState([]);
  const [filteredLivres, setFilteredLivres] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategorie, setSelectedCategorie] = useState("Science Fiction");

  function ajouterAuPanier(livre) {
    setTotal(total + livre.Prix);
    setPanier([...panier, { ...livre }]);
  }

  function supprimerAuPanier(itemIndex) {
    setPanier(
      panier.filter((_, index) => {
        return index !== itemIndex;
      })
    );
  }

  useEffect(() => {
    fetch("http://localhost:3000/livres")
      .then((res) => res.json())
      .then((res) => setLivres(res));
    const initCategories = [
      { categorie: "Science Fiction" },
      { categorie: "Romance" },
      { categorie: "Histoire" },
      { categorie: "Fantasy" },
    ];
    setCategories(initCategories);
  }, []);

  useEffect(() => {
    setFilteredLivres(
      livres.filter((item) => item.Genre === selectedCategorie)
    );
  }, [selectedCategorie, livres]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container mx-auto p-6">
          <div className="mb-6">
            <label className="mr-2 font-bold text-lg text-gray-800">
              Catégorie :
            </label>
            <select
              className="p-2 border border-gray-300 rounded"
              value={selectedCategorie}
              onChange={(e) => setSelectedCategorie(e.target.value)}
            >
              {categories.map((item, index) => (
                <option key={index} value={item.categorie}>
                  {item.categorie}
                </option>
              ))}
            </select>
          </div>

          <h1 className="text-3xl text-sky-700 font-bold text-center mb-8">
            Livres du genre : {selectedCategorie}
          </h1>

          <table className="w-full border-collapse border border-gray-300 mb-8">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Titre</th>
                <th className="border border-gray-300 p-2">Auteur</th>
                <th className="border border-gray-300 p-2">Prix</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLivres.map((livre, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 p-2">{livre.Titre}</td>
                  <td className="border border-gray-300 p-2">{livre.Auteur}</td>
                  <td className="border border-gray-300 p-2">
                    {livre.Prix} DH
                  </td>
                  <td className="border border-gray-300 p-2">
                    <button
                      onClick={() => ajouterAuPanier(livre)}
                      className="p-2 bg-blue-500 text-white rounded"
                    >
                      Ajouter au panier
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div>
            <h1 className="text-2xl text-sky-700 font-bold mb-4">Panier :</h1>
            <ul className="list-disc space-y-2 pl-6 mb-4 font-semibold text-gray-800">
              {panier.map((item, index) => (
                <li key={index}>
                  {`${item.Titre} - ${item.Auteur} - ${item.Prix} DH `}
                  <button
                    className="bg-red-600 text-white text-sm px-2 py-1 rounded"
                    onClick={() => supprimerAuPanier(index)}
                  >
                    Supprimer
                  </button>
                </li>
              ))}
            </ul>
            <p className="font-bold text-lg text-gray-800 mb-8">
              Total : {total} DH
            </p>
          </div>

          <Routes>
            <Route
              path="/details-livre"
              element={<DetailsLivre livres={livres} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
