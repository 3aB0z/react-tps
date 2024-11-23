import { useState } from "react";

export default function Verification() {
  const [idDossier, setIdDossier] = useState("");
  const [resultat, setResultat] = useState(null);
  const [message, setMessage] = useState("");

  const verifierDossier = async () => {
    const response = await fetch("http://localhost:3000/api/verification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: idDossier }),
    });

    const data = await response.json();
    if (response.status) {
      setResultat(data.verifie);
      setMessage(
        data.verifie
          ? "Le dossier est bien traité par le notaire."
          : "Le dossier n'est pas encore traité par le notaire."
      );
    } else {
      console.log("Erreur lors de la vérification.");
    }
  };

  return (
    <div className="my-8 bg-slate-100 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-sky-700">
        Vérification du Dossier
      </h2>
      <label className="block mb-1 font-medium text-gray-700">
        ID du dossier:
      </label>
      <input
        className="w-full px-3 py-2 mb-6 border rounded"
        type="text"
        value={idDossier}
        onChange={(e) => setIdDossier(e.target.value)}
        placeholder="Entrer l'ID du dossier"
      />
      <button
        className="w-full bg-blue-500 text-white py-2 rounded"
        onClick={verifierDossier}
      >
        Vérifier
      </button>
      {message && (
        <p
          className={`mt-4 text-center font-medium ${
            resultat ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
