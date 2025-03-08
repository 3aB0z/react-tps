import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { supprimer } from "./redux/actions/actions";

export default function Delann({ annId }) {
  const dispatch = useDispatch();

  function supprimerAnn() {
    dispatch(supprimer(annId));
  }

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center space-y-6">
        <h1 className="text-2xl font-medium text-rose-800">
          Tu peut supprimer cette annonce?
        </h1>
        <div className="flex items-center space-x-4">
          <Link
            to={"/adminanns"}
            onClick={supprimerAnn}
            className="bg-rose-500 text-white rounded px-3 py-1"
          >
            Confirmer
          </Link>
          <Link
            to={"/adminanns"}
            className="bg-slate-200 text-slate-700 rounded px-3 py-1"
          >
            Annuler
          </Link>
        </div>
      </div>
    </>
  );
}
