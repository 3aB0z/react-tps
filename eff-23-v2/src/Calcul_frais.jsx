import { useState } from "react";
import { useDispatch } from "react-redux";
import { ajouter } from "./redux/actions/actions";

export default function Calcul_frais() {
  const [montant, setMontant] = useState(0);
  const [simulation, setSimulation] = useState({
    id: 0,
    Droits_en: 0,
    Conservation: 0,
    Date: new Date(),
    total: 0,
    dossier: 0,
    honoraires: 0,
    tva: 0,
  });

  const dispatch = useDispatch();

  function calculerFrais() {
    const droits = montant * 0.04;
    const conservation = montant * 0.015 + 100 + 100;
    const dossier = 1500;
    let honoraires = 0;
    if (montant <= 300000) {
      honoraires = 4000;
    } else if (montant <= 1000000) {
      honoraires = montant * 0.015;
    } else if (montant <= 5000000) {
      honoraires = montant * 0.0125;
    } else if (montant <= 10000000) {
      honoraires = montant * 0.0075;
    } else {
      honoraires = montant * 0.005;
    }
    const tva = honoraires * 0.1;
    const total = droits + conservation + dossier + honoraires + tva;
    const newSimulation = {
      id: parseInt(montant),
      Droits_en: droits,
      Conservation: conservation,
      Date: new Date().toLocaleString(),
      total: total,
    };
    setSimulation({
      ...newSimulation,
      dossier: dossier,
      honoraires: honoraires,
      tva: tva,
    });
    dispatch(ajouter({ ...newSimulation }));
  }

  return (
    <div className="my-8 bg-slate-100 rounded-lg shadow-lg p-6">
      <h1 className="text-2xl font-bold mb-6 text-center text-sky-700">
        Calcul des Frais de Notaire
      </h1>
      <label className="block text-gray-700 font-medium mb-1">
        Montant de vente du bien :
      </label>
      <input
        className="w-full px-3 py-2 mb-6 border rounded"
        type="number"
        value={montant}
        onChange={(e) => setMontant(e.target.value)}
        placeholder="Entrez le montant"
      />
      <button
        className="w-full bg-blue-500 text-white py-2 rounded"
        onClick={calculerFrais}
      >
        Calculer
      </button>
      {simulation.id > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Résultats du Calcul :
          </h2>
          <ul className="space-y-4">
            <li className="flex justify-between border-b pb-2">
              <span>Droits de enregistrement (4% du prix de vente) :</span>
              <span className="font-semibold text-gray-700">
                {simulation.Droits_en} DH
              </span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>
                Conservation foncière (1,5% du prix de vente + 200 DH) :
              </span>
              <span className="font-semibold text-gray-700">
                {simulation.Conservation} DH
              </span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Frais de dossier :</span>
              <span className="font-semibold text-gray-700">
                {simulation.dossier} DH
              </span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Honoraires du notaire :</span>
              <span className="font-semibold text-gray-700">
                {simulation.honoraires} DH
              </span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>TVA sur les honoraires (10%) :</span>
              <span className="font-semibold text-gray-700">
                {simulation.tva} DH
              </span>
            </li>
            <li className="flex justify-between font-bold text-lg text-gray-800">
              <span>TOTAL :</span>
              <span className="text-green-600">{simulation.total} DH</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
