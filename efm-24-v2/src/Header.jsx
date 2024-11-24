import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full py-6 flex flex-col items-center bg-slate-100">
      <h1 className="text-2xl font-bold mb-8 text-sky-700">Bibliothèque</h1>
      <div className="flex space-x-4 font-semibold">
        <Link className="text-sky-600 underline rounded" to="/">
          Accueil
        </Link>
        <Link className="text-sky-600 underline rounded" to="/details-livre">
          Détails
        </Link>
      </div>
    </div>
  );
}
