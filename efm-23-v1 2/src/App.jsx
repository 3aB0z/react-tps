import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [stagiaires, setStagiaires] = useState([]);
  const [stagiaires2, setStagiaires2] = useState([]);
  const [formInputs, setFormInputs] = useState({
    id: 0,
    matricule: "",
    nom: "",
    ville: "",
    codePostal: 0,
    moyenne: 0,
  });
  const [notes, setNotes] = useState({
    moyennePlus: 0,
    moyenneMoins: 0,
    moyenneGeneral: 0,
  });

  function handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    setFormInputs((prv) => {
      return { ...prv, [name]: value };
    });
  }

  function viderForm() {
    setFormInputs((prv) => {
      return {
        ...prv,
        matricule: "",
        nom: "",
        ville: "",
        codePostal: 0,
        moyenne: 0,
      };
    });
  }

  function ajouter() {
    const isMatricule = stagiaires.some(
      (item) => item.matricule === formInputs.matricule
    );

    if (
      formInputs.matricule != "" &&
      formInputs.nom != "" &&
      formInputs.ville != ""
    ) {
      if (!isMatricule) {
        if (
          formInputs.codePostal >= 0 &&
          formInputs.codePostal <= 20 &&
          formInputs.moyenne >= 0 &&
          formInputs.moyenne <= 20
        ) {
          const newStagiaire = { ...formInputs };

          viderForm();

          setStagiaires((prv) => {
            return [...prv, newStagiaire];
          });
        }
      }
    }
  }

  function editerStagiaire(stagiaire) {
    // const newStagiaires = stagiaires.map((item) => {
    //   if (item.id === stagiaire.id) {
    //     return { ...stagiaire };
    //   }
    //   return item;
    // });

    // setStagiaires(newStagiaires);
    setFormInputs(stagiaire);
  }

  function supprimerStagiaire(stagiaireId) {
    const newStagiaires = stagiaires.filter((item) => item.id !== stagiaireId);

    setStagiaires(newStagiaires);
  }

  function filtrerVilleNom() {
    const newStagiaires2 = stagiaires.filter((stagiaire) => {
      return (
        stagiaire.nom.includes(formInputs.nom.toLocaleLowerCase()) ||
        stagiaire.ville.includes(formInputs.ville.toLocaleLowerCase())
      );
    });

    setStagiaires2(newStagiaires2);
  }

  function initialiserRecherche() {
    setStagiaires2([]);
  }

  useEffect(() => {
    function generateId() {
      if (stagiaires.length !== 0) {
        const generatedId = stagiaires[stagiaires.length - 1].id + 1;

        setFormInputs((prv) => {
          return { ...prv, id: generatedId };
        });
      }
    }

    function calculNotes() {
      const listMoyennes = stagiaires.map((item) => item.moyenne);
      const moyennePlus = Math.max(...listMoyennes);
      const moyenneMoins = Math.min(...listMoyennes);
      const moyenneGeneral = listMoyennes.reduce(
        (acc, item) => (acc += Number(item)),
        0
      );

      setNotes({
        moyennePlus,
        moyenneMoins,
        moyenneGeneral: moyenneGeneral / stagiaires.length,
      });
    }

    calculNotes();
    generateId();
  }, [stagiaires]);

  useEffect(() => {
    setStagiaires([
      {
        id: 1,
        matricule: "1454",
        nom: "Alaoui",
        codePostal: 20,
        ville: "casa",
        moyenne: 12.56,
      },
      {
        id: 2,
        matricule: "1455",
        nom: "El Khouyi",
        codePostal: 10,
        ville: "rabat",
        moyenne: 13.25,
      },
      {
        id: 3,
        matricule: "1456",
        nom: "Benjelloun",
        codePostal: 8,
        ville: "agadir",
        moyenne: 11.75,
      },
      {
        id: 4,
        matricule: "1457",
        nom: "Chraibi",
        codePostal: 4,
        ville: "marrakech",
        moyenne: 14.1,
      },
      {
        id: 5,
        matricule: "1458",
        nom: "Faqir",
        codePostal: 9,
        ville: "tanger",
        moyenne: 10.95,
      },
    ]);
  }, []);

  return (
    <>
      <div className="w-full space-y-3">
        <h1 className="text-xl text-white">Liste des Stagiaires</h1>
        {stagiaires.length !== 0 ? (
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Matricule</th>
                <th>Nom</th>
                <th>Ville</th>
                <th>Code Postal</th>
                <th>Moyenne</th>
                <th>Supprimer</th>
                <th>Editer</th>
              </tr>
            </thead>
            <tbody>
              {stagiaires.map((stagiaire) => {
                return (
                  <tr key={stagiaire.id}>
                    <td>{stagiaire.id}</td>
                    <td>{stagiaire.matricule}</td>
                    <td>{stagiaire.nom}</td>
                    <td>{stagiaire.ville}</td>
                    <td>{stagiaire.codePostal}</td>
                    <td>{stagiaire.moyenne}</td>
                    <td>
                      <button onClick={() => supprimerStagiaire(stagiaire.id)}>
                        Supprimer
                      </button>
                    </td>
                    <td>
                      <button onClick={() => editerStagiaire(stagiaire)}>
                        Editer
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <span className="text-rose-600">Tableau des stagiaires vide</span>
        )}
        <div className="space-y-3">
          <div className="w-1/2 flex justify-between items-center space-y-1">
            <label>Id:</label>
            <input
              type="nubmer"
              name="id"
              value={formInputs.id}
              onChange={handleInputChange}
              readOnly={true}
            />
          </div>
          <div className="w-1/2 flex justify-between items-center space-y-1">
            <label>Matricule:</label>
            <input
              type="text"
              name="matricule"
              value={formInputs.matricule}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-1/2 flex justify-between items-center space-y-1">
            <label>Nom:</label>
            <input
              type="text"
              name="nom"
              value={formInputs.nom}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-1/2 flex justify-between items-center space-y-1">
            <label>Ville:</label>
            <input
              type="text"
              name="ville"
              value={formInputs.ville}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-1/2 flex justify-between items-center space-y-1">
            <label>CodePostal:</label>
            <input
              type="number"
              name="codePostal"
              value={formInputs.codePostal}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-1/2 flex justify-between items-center space-y-1">
            <label>Moyenne:</label>
            <input
              type="number"
              name="moyenne"
              value={formInputs.moyenne}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-x-2">
            <button onClick={ajouter}>Ajouter</button>
            <button onClick={filtrerVilleNom}>Filtrer ville et nom</button>
            <button onClick={viderForm}>Vider</button>
            <button onClick={initialiserRecherche}>
              Initialiser recherche
            </button>
          </div>
          <ul>
            <li>La moyenne generale la plus eleve: {notes.moyennePlus}</li>
            <li>La moyenne generale la moins eleve: {notes.moyenneMoins}</li>
            <li>La moyenne de la classe: {notes.moyenneGeneral}</li>
          </ul>
          {stagiaires2.length !== 0 ? (
            stagiaires2.map((item) => {
              return (
                <ul key={item.id}>
                  <li>{item.id}</li>
                  <li>{item.matricule}</li>
                  <li>{item.nom}</li>
                  <li>{item.ville}</li>
                  <li>{item.codePostal}</li>
                  <li>{item.moyenne}</li>
                </ul>
              );
            })
          ) : (
            <span className="text-rose-600">Tableau de recherche vide</span>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
