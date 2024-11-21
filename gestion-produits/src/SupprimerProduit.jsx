import { Link } from "react-router-dom";

export default function SupprimerProduit({ produits, setProduits, selectedProduit }) {
  function supprimer() {
    const filteredProduits = produits.filter((item) => {
      return item.id != selectedProduit.id;
    });
    setProduits(filteredProduits);
  }

  return (
    <>
      <div className="w-full h-48 flex flex-col items-center justify-around">
        <h1 className="text-red-600 text-4xl font-bold">Supprimer Produit ?</h1>
        <Link
          to="/"
          className="bg-red-600 px-3 py-2 rounded-lg text-white"
          onClick={supprimer}
        >
          Supprimer
        </Link>
      </div>
    </>
  );
}
