import { useState } from "react";

export default function Composant2({ salaries }) {
  const [search, setSearch] = useState("");

  const [result, setResult] = useState([]);

  function chercher() {
    setResult(
      salaries.filter((item) => {
        return item.service.nomser.toLowerCase() === search.toLowerCase();
      })
    );
  }

  return (
    <>
      <h2>Recherche par service:</h2>
      <label>Entrer le nom du service:</label>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <button onClick={chercher}>chercher</button>
      <h2>Resultat</h2>
      <div>
        <h3>Résultat</h3>
        {result.length > 0 ? (
          <ul>
            {result.map((salarie, index) => (
              <li key={index}>
                Nom : {salarie.nomsal}, Prénom : {salarie.prenomsal}
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucun salarié n est affecté à ce service.</p>
        )}
      </div>
    </>
  );
}
