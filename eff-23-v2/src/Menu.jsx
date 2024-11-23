import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <>
      <header className="w-full flex flex-row justify-evenly items-center py-6">
        <Link
          className="bg-blue-500 px-3 py-2 text-white rounded-lg"
          to="/verification"
        >
          Verification
        </Link>
        <Link className="bg-blue-500 px-3 py-2 text-white rounded-lg" to="/">
          Calcul frais
        </Link>
      </header>
    </>
  );
}
