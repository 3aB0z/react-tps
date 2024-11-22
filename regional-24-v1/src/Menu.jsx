import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <div className="w-full flex flex-row justify-evenly items-center">
        <Link
          className="bg-sky-500 px-3 py-2 mt-8 rounded-lg text-white"
          to="/"
        >
          Info Produits
        </Link>
        <Link
          className="bg-sky-500 px-3 py-2 mt-8 rounded-lg text-white"
          to="/recherche"
        >
          Recherche
        </Link>
        <Link
          className="bg-sky-500 px-3 py-2 mt-8 rounded-lg text-white"
          to="/affiche"
        >
          Affiche
        </Link>
      </div>
    </>
  );
}
