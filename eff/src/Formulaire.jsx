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
    <div className="w-full h-[600px] mt-10 flex justify-center">
      <form
        action=""
        className="bg-gray-400 h-[500px] w-80 flex flex-col items-center rounded-md "
      >
        <label htmlFor="">Thème :</label>
        <input
          type="text"
          onChange={(e) => {
            setInfos({ ...infos, thème: e.target.value });
          }}
        />
        <br />
        <label htmlFor="">Date de début :</label>
        <input
          type="date"
          onChange={(e) => {
            setInfos({ ...infos, dateDebut: e.target.value });
          }}
        />
        <br />
        <label htmlFor="">Date de fin :</label>
        <input
          type="date"
          onChange={(e) => {
            setInfos({ ...infos, dateFin: e.target.value });
          }}
        />
        <br />
        <label htmlFor="">Coût :</label>
        <input
          type="number"
          onChange={(e) => {
            setInfos({ ...infos, cout: e.target.value });
          }}
        />
        <br />
        <label htmlFor="">Expert :</label>
        <input
          type="text"
          onChange={(e) => {
            setInfos({ ...infos, expert: e.target.value });
          }}
        />
        <br />
        <button
          className="bg-slate-800 w-24 h-8 rounded-md text-white"
          onClick={(e) => {
            e.preventDefault();
            setInfos({ ...infos, affichage: { ...infos } });
          }}
        >
          Confirmer
        </button>
        <p>
          {infos.affichage
            ? `L'espert: ${infos.expert} le théme: ${
                infos.affichage.thème
              } avec un coût journalier:${
                infos.affichage.cout
              } DH,pour ine durée de :${calculerJours(
                infos.affichage.dateDebut,
                infos.affichage.dateFin
              )} jours,soit un coût  total de :${
                infos.affichage.cout *
                calculerJours(
                  infos.affichage.dateDebut,
                  infos.affichage.dateFin
                )
              } DH`
            : ""}
        </p>
      </form>
    </div>
  );
}
