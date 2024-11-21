import { useState } from "react";

function Stagiaires() {
  const [selectedObjects, setSelectedObjects] = useState([
    { id: 1, checked: false },
  ]);

  const [etudiant, setEtudiant] = useState({
    id: "",
    nom: "",
    prenom: "",
  });

  const [etudiants, setEtudiants] = useState([
    { id: 1, nom: "Ouchouid", prenom: "Zakaria" },
    { id: 2, nom: "Ouafik", prenom: "Mohammed" },
    { id: 3, nom: "Loukhmi", prenom: "Abdelaziz" },
    { id: 4, nom: "Idrissi", prenom: "Aymen" },
  ]);

  function handleSubmit(e) {
    e.preventDefault();

    const newEtudiant = {
      id: etudiant.id,
      nom: etudiant.nom,
      prenom: etudiant.prenom,
    };
    const isIdExists = etudiants.some((item) => item.id == etudiant.id);

    if (isIdExists) {
      setEtudiants(
        etudiants.map((item) => (item.id == etudiant.id ? newEtudiant : item))
      );
    } else {
      setEtudiants([...etudiants, newEtudiant]);
    }

    setEtudiant({
      id: "",
      nom: "",
      prenom: "",
    });
  }

  function modifier(etudiant) {
    setEtudiant({
      id: etudiant.id,
      nom: etudiant.nom,
      prenom: etudiant.prenom,
    });
  }

  function supprimer(id) {
    setEtudiants(etudiants.filter((etudiant) => etudiant.id !== id));
  }

  function supprimerSelectedObjects() {
    const selectedIds = selectedObjects
      .filter((object) => object.checked)
      .map((object) => object.id);
    setEtudiants(
      etudiants.filter((etudiant) => !selectedIds.includes(etudiant.id))
    );
    setSelectedObjects([]);
  }

  return (
    <>
      <h1 className="text-red-600 text-6xl text-center my-8 font-bold">
        GESTION DES STAGIAIRES
      </h1>
      <form className="w-full flex justify-center items-center">
        <div className="w-64 flex flex-col items-center space-y-6">
          <input
            className="bg-gray-300 w-full h-8 rounded-md outline-none pl-2"
            placeholder="Id"
            value={etudiant.id}
            onChange={(e) => setEtudiant({ ...etudiant, id: e.target.value })}
          />
          <input
            className="bg-gray-300 w-full h-8 rounded-md outline-none pl-2"
            placeholder="Nom"
            value={etudiant.nom}
            onChange={(e) => setEtudiant({ ...etudiant, nom: e.target.value })}
          />
          <input
            className="bg-gray-300 w-full h-8 rounded-md outline-none pl-2"
            placeholder="Prenom"
            value={etudiant.prenom}
            onChange={(e) =>
              setEtudiant({ ...etudiant, prenom: e.target.value })
            }
          />
          <button
            className="bg-emerald-500 rounded-lg py-1 px-4 text-white text-lg"
            onClick={handleSubmit}
          >
            Enregistrer
          </button>
        </div>
      </form>

      <table className="w-[90%] mt-8 table-auto border-collapse bg-slate-700 mx-auto">
        <thead>
          <tr>
            <th className="text-white py-2 border border-slate-500 bg-slate-800">
              Select
            </th>
            <th className="text-white py-2 border border-slate-500 bg-slate-800">
              Id
            </th>
            <th className="text-white py-2 border border-slate-500 bg-slate-800">
              Nom
            </th>
            <th className="text-white py-2 border border-slate-500 bg-slate-800">
              Prenom
            </th>
            <th className="text-white py-2 border border-slate-500 bg-slate-800">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {etudiants.map((item) => (
            <tr key={item.id}>
              <td className="text-slate-200 p-2 border border-slate-500">
                <input
                  type="checkbox"
                  checked={selectedObjects.some(
                    (object) => object.id === item.id && object.checked
                  )}
                  onChange={(e) => {
                    const isIdExists = selectedObjects.some(
                      (object) => item.id == object.id
                    );
                    if (isIdExists) {
                      setSelectedObjects(
                        selectedObjects.map((object) =>
                          item.id == object.id
                            ? { ...object, checked: e.target.checked }
                            : object
                        )
                      );
                    } else {
                      setSelectedObjects([
                        ...selectedObjects,
                        { id: item.id, checked: e.target.checked },
                      ]);
                    }
                  }}
                />
              </td>
              <td className="text-slate-200 p-2 border border-slate-500">
                {item.id}
              </td>
              <td className="text-slate-200 p-2 border border-slate-500">
                {item.nom}
              </td>
              <td className="text-slate-200 p-2 border border-slate-500">
                {item.prenom}
              </td>
              <td className="text-white p-2 border border-slate-500 flex justify-evenly items-center">
                <button
                  className="bg-amber-500 px-3 py-1 rounded-lg"
                  onClick={() => modifier(item)}
                >
                  Modifier
                </button>
                <button
                  className="bg-red-600 px-3 py-1 rounded-lg"
                  onClick={() => supprimer(item.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full flex justify-center">
        <button
          className="bg-red-600 text-white m-10 px-4 py-2 rounded-lg"
          onClick={supprimerSelectedObjects}
        >
          Supprimer tout
        </button>
      </div>
    </>
  );
}

export default Stagiaires;
