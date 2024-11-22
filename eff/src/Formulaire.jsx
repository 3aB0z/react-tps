import { useState } from "react";

export default function Formulaire() {
  const [infos, setInfos] = useState({
    thème: "",
    dateDebut: "",
    dateFin: "",
    cout: "",
    expert: "",
    affichage: false,
  });

  const calculerJours = (dateDebut, dateFin) => {
    dateDebut = new Date(dateDebut);
    dateFin = new Date(dateFin);
    return (dateFin.getTime() - dateDebut.getTime()) / (1000 * 60 * 60 * 24);
  };

  return (
    <div className="w-full flex justify-center items-center py-12 bg-gray-100">
      <form className="bg-white w-96 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Formulaire
        </h2>
        <label htmlFor="thème" className="block text-gray-700 mb-2">
          Thème :
        </label>
        <input
          type="text"
          id="thème"
          className="w-full p-2 border rounded-md mb-4"
          onChange={(e) => {
            setInfos({ ...infos, thème: e.target.value });
          }}
        />
        <label htmlFor="dateDebut" className="block text-gray-700 mb-2">
          Date de début :
        </label>
        <input
          type="date"
          id="dateDebut"
          className="w-full p-2 border rounded-md mb-4"
          onChange={(e) => {
            setInfos({ ...infos, dateDebut: e.target.value });
          }}
        />
        <label htmlFor="dateFin" className="block text-gray-700 mb-2">
          Date de fin :
        </label>
        <input
          type="date"
          id="dateFin"
          className="w-full p-2 border rounded-md mb-4"
          onChange={(e) => {
            setInfos({ ...infos, dateFin: e.target.value });
          }}
        />
        <label htmlFor="cout" className="block text-gray-700 mb-2">
          Coût :
        </label>
        <input
          type="number"
          id="cout"
          className="w-full p-2 border rounded-md mb-4"
          onChange={(e) => {
            setInfos({ ...infos, cout: e.target.value });
          }}
        />
        <label htmlFor="expert" className="block text-gray-700 mb-2">
          Expert :
        </label>
        <input
          type="text"
          id="expert"
          className="w-full p-2 border rounded-md mb-4"
          onChange={(e) => {
            setInfos({ ...infos, expert: e.target.value });
          }}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={(e) => {
            e.preventDefault();
            setInfos({ ...infos, affichage: { ...infos } });
          }}
        >
          Confirmer
        </button>
        {infos.affichage && (
          <div className="mt-6 bg-gray-100 p-4 rounded-md shadow-md">
            <p className="text-gray-800 font-medium">
              <span className="font-bold">Le expert :</span> {infos.expert}
            </p>
            <p className="text-gray-800 font-medium">
              <span className="font-bold">Thème :</span> {infos.affichage.thème}
            </p>
            <p className="text-gray-800 font-medium">
              <span className="font-bold">Coût journalier :</span>
              {infos.affichage.cout} DH
            </p>
            <p className="text-gray-800 font-medium">
              <span className="font-bold">Durée :</span>
              {calculerJours(
                infos.affichage.dateDebut,
                infos.affichage.dateFin
              )}
              jours
            </p>
            <p className="text-gray-800 font-medium">
              <span className="font-bold">Coût total :</span>
              {infos.affichage.cout *
                calculerJours(
                  infos.affichage.dateDebut,
                  infos.affichage.dateFin
                )}
              DH
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
