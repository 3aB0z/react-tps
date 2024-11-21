import { useEffect, useState } from "react";
import Header from "./Header";

function App() {
  const [livres, setLivres] = useState([]);
  const [panier, setPanier] = useState([]);

  function ajouter(item) {
    setPanier([...panier, { ...item }]);
  }

  useEffect(() => {
    fetch("http://localhost:3000/livres")
      .then((res) => res.json())
      .then((res) => setLivres(res));
  }, []);

  return (
    <>
      <Header />
      <table>
        <thead>
          <tr>
            <th>Titre:</th>
            <th>Auteur:</th>
            <th>Prix:</th>
            <th>Ajouter:</th>
          </tr>
        </thead>
        <tbody>
          {livres.map((livre, index) => {
            return (
              <tr key={index}>
                <td>{livre.Titre}</td>
                <td>{livre.Auteur}</td>
                <td>{livre.Prix}</td>
                <td>
                  <button onClick={() => ajouter(livre)}>
                    Ajouter au panier
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Titre:</th>
            <th>Auteur:</th>
            <th>Prix:</th>
            <th>Total Prix:</th>
          </tr>
        </thead>
        <tbody>
          {panier.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.Titre}</td>
                <td>{item.Auteur}</td>
                <td>{item.Prix}</td>
                <td>{}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
