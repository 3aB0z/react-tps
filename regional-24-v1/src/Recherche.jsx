import { useState } from "react";

export default function Recherche({ produits }) {
  const [search, setSearch] = useState("");

  const [searchedProduits, setSearchedProduits] = useState([]);

  function handleSearch() {
    setSearchedProduits(
      produits.filter((item) => {
        return item.categorie.nomC.toLowerCase() == search.toLowerCase();
      })
    );
  }

  return (
    <>
      <div>
        <label>Rechrche Par Cetegorie:</label>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />
        <button
          className="bg-sky-500 px-3 py-2 mt-8 rounded-lg text-white"
          onClick={handleSearch}
        >
          Recherche
        </button>
      </div>
      <div className="flex flex-col items-center">
        <h3>Resultat:</h3>
        <ul>
          {searchedProduits.length !== 0
            ? searchedProduits.map((item, index) => {
                return (
                  <li key={index}>
                    {item.nomP} | prix: {item.prixP}dh <a href="#">..plus</a>
                  </li>
                );
              })
            : <li className="text-red-600">aucun produit a afficher!</li>}
        </ul>
      </div>
    </>
  );
}
