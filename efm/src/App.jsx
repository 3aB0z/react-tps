import { useEffect, useState } from "react";

function App() {
  const [stagiaires, setStagiaires] = useState([]);

  const [stagiaires2, setStagiaires2] = useState([]);

  const [form, setForm] = useState({
    id: "",
    matricule: "",
    nom: "",
    ville: "",
    codepostal: "",
    moyenne: 0,
  });

  function setNewId(props = "") {
    if (props === "") {
      props = { ...form, id: stagiaires.length + 1 };
    } else {
      props = { ...form, id: props };
    }
    setForm(props);
  }

  function ajouter() {
    if (
      form.matricule !== "" &&
      form.nom !== "" &&
      form.ville !== "" &&
      form.codepostal !== "" &&
      form.moyenne !== ""
    ) {
      if (
        form.codepostal >= 0 &&
        form.codepostal <= 20 &&
        form.moyenne >= 0 &&
        form.moyenne <= 20
      ) {
        const isMatricule = stagiaires.some(
          (item) => item.matricule === form.matricule
        );
        if (!isMatricule) {
          const newStagiaire = {
            ...form,
            id: stagiaires.length + 1,
            matricule: parseInt(form.matricule),
            codepostal: parseInt(form.codepostal),
            moyenne: parseInt(form.moyenne),
          };
          setForm({...newStagiaire});
          setStagiaires([...stagiaires, {...newStagiaire}]);
          vider();
        }
      }
    }
  }

  function supprimer(stagiaire) {
    setStagiaires(
      stagiaires.filter((item) => {
        return item !== stagiaire;
      })
    );
  }

  function editer(stagiaire) {
    setForm({
      id: stagiaire.id,
      matricule: stagiaire.matricule,
      nom: stagiaire.nom,
      codepostal: stagiaire.codepostal,
      ville: stagiaire.ville,
      moyenne: stagiaire.moyenne,
    });
    const newStagiaire = stagiaires.map((item) => {
      if (item.id === form.id) {
        item = {
          ...stagiaire,
          matricule: form.matricule,
          nom: form.nom,
          codepostal: form.codepostal,
          ville: form.ville,
          moyenne: form.moyenne,
        };
      }
      return item;
    });
    setStagiaires(newStagiaire);
  }

  function vider() {
    setNewId();
    setForm((f) => {
      return {
        ...f,
        matricule: "",
        nom: "",
        ville: "",
        codepostal: "",
        moyenne: 0,
      };
    });
  }

  function filtrer() {
    setStagiaires2(
      stagiaires.filter((item) => {
        return item.nom === form.nom && item.ville === form.ville;
      })
    );
  }

  function initialiserRecherche() {
    setStagiaires2([]);
  }

  function calculerMoyenne(name) {
    let moyenne = stagiaires.map((stagiaire) => stagiaire.moyenne);
    let moyenneNum = 0;
    let moyenneTotal = 0;

    moyenne.map((item) => {
      moyenneTotal += item;
      moyenneNum += 1;
    });

    if (name === "MGPE") {
      return Math.max(...moyenne);
    } else if (name === "MGME") {
      return Math.min(...moyenne);
    } else if (name === "MC") {
      return moyenneTotal / moyenneNum;
    }
  }

  useEffect(() => {
    setStagiaires([
      {
        id: 1,
        matricule: 1454,
        nom: "Alaoui",
        codepostal: 20,
        ville: "casa",
        moyenne: 12.56,
      },
      {
        id: 2,
        matricule: 1455,
        nom: "El Khouyi",
        codepostal: 10,
        ville: "rabat",
        moyenne: 13.25,
      },
      {
        id: 3,
        matricule: 1456,
        nom: "Benjelloun",
        codepostal: 8,
        ville: "agadir",
        moyenne: 11.75,
      },
      {
        id: 4,
        matricule: 1457,
        nom: "Chraibi",
        codepostal: 4,
        ville: "marrakech",
        moyenne: 14.1,
      },
      {
        id: 5,
        matricule: 1458,
        nom: "Faqir",
        codepostal: 9,
        ville: "tanger",
        moyenne: 10.95,
      },
    ]);
  }, []);

  return (
    <>
      <div className="p-4">
        <h1 className="text-4xl text-red-600 text-center font-bold mb-4">
          Liste des Stagiaires
        </h1>
        <br />
        {stagiaires.length !== 0 ? (
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">id</th>
                <th className="border p-2">Matricule</th>
                <th className="border p-2">Nom</th>
                <th className="border p-2">Ville</th>
                <th className="border p-2">Code Postal</th>
                <th className="border p-2">Moyenne</th>
                <th className="border p-2">Supprimer</th>
                <th className="border p-2">Editer</th>
              </tr>
            </thead>
            <tbody>
              {stagiaires.map((stagiaire) => (
                <tr key={stagiaire.id}>
                  <td className="border p-2">{stagiaire.id}</td>
                  <td className="border p-2">{stagiaire.matricule}</td>
                  <td className="border p-2">{stagiaire.nom}</td>
                  <td className="border p-2">{stagiaire.ville}</td>
                  <td className="border p-2">{stagiaire.codepostal}</td>
                  <td className="border p-2">{stagiaire.moyenne}</td>
                  <td className="border p-2">
                    <button
                      className="bg-red-600 text-white px-3 py-1 rounded"
                      onClick={() => supprimer(stagiaire)}
                    >
                      Supprimer
                    </button>
                  </td>
                  <td className="border p-2">
                    <button
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                      onClick={() => editer(stagiaire)}
                    >
                      Editer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-red-600">tableau des stagiaires vide</p>
        )}
        <div className="mt-4 space-y-2">
          <label className="w-36 mr-2">id </label>
          <input
            className="w-36 mr-2 border p-1"
            type="number"
            value={form.id}
            readOnly={true}
          />
          <label className="w-36 mr-2">Matricule: </label>
          <input
            className="w-36 mr-2 border p-1"
            type="number"
            value={form.matricule}
            onChange={(e) => setForm({ ...form, matricule: e.target.value })}
          />
          <label className="w-36 mr-2">Nom: </label>
          <input
            className="w-36 mr-2 border p-1"
            type="text"
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
          />
          <label className="w-36 mr-2">Ville: </label>
          <input
            className="w-36 mr-2 border p-1"
            type="text"
            value={form.ville}
            onChange={(e) => setForm({ ...form, ville: e.target.value })}
          />
          <label className="w-36 mr-2">CodePostal: </label>
          <input
            className="w-36 mr-2 border p-1"
            type="number"
            value={form.codepostal}
            onChange={(e) => setForm({ ...form, codepostal: e.target.value })}
          />
          <label className="w-36 mr-2">Moyenne: </label>
          <input
            className="w-36 mr-2 border p-1"
            type="number"
            value={form.moyenne}
            onChange={(e) => setForm({ ...form, moyenne: e.target.value })}
          />
          <button
            className="w-1/5 mx-8 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={ajouter}
          >
            Ajouter
          </button>
          <button
            className="w-1/5 mx-8 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={filtrer}
          >
            Filtrer Ville et Nom
          </button>
          <button
            className="w-1/5 mx-8 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={vider}
          >
            Vider
          </button>
          <button
            className="w-1/5 mx-8 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={initialiserRecherche}
          >
            Initialiser recherche
          </button>
        </div>
        <ul className="mt-4">
          <li>La Moyenne generale la plus Elevee: {calculerMoyenne("MGPE")}</li>
          <li>
            La Moyenne generale la moins Elevee: {calculerMoyenne("MGME")}
          </li>
          <li>La Moyenne de la classe: {calculerMoyenne("MC")}</li>
        </ul>
        {stagiaires2.length !== 0 ? (
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">id</th>
                <th className="border p-2">Matricule</th>
                <th className="border p-2">Nom</th>
                <th className="border p-2">Ville</th>
                <th className="border p-2">Code Postal</th>
                <th className="border p-2">Moyenne</th>
              </tr>
            </thead>
            <tbody>
              {stagiaires2.map((stagiaire) => (
                <tr key={stagiaire.id}>
                  <td className="border p-2">{stagiaire.id}</td>
                  <td className="border p-2">{stagiaire.matricule}</td>
                  <td className="border p-2">{stagiaire.nom}</td>
                  <td className="border p-2">{stagiaire.ville}</td>
                  <td className="border p-2">{stagiaire.codepostal}</td>
                  <td className="border p-2">{stagiaire.moyenne}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-red-600">Tableau de recherche Vide</p>
        )}
      </div>
    </>
  );
}

export default App;
