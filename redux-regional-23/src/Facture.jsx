import { useRef, useState } from "react";
import { useSelector } from "react-redux";

function Facture() {
  const produits = useSelector((state) => state.produits);
  const numero = useRef("");
  const [clientFiltres, setClientFiltres] = useState({
    nom: "",
    prenom: "",
    achats: [],
  });
  let totalAchats = [];
  const achats = useSelector((state) => state.achats);
  const clients = useSelector((state) => state.clients);
  function getProduitByCode(code) {
    return produits.find((item) => code == item.codeProduit);
  }
  return (
    <>
      <div className="w-full flex flex-col items-center py-10">
        <div>
          <input
            className="w-40 border-2 mr-6 border-slate-500 pl-3 outline-none h-8 rounded-full"
            type="text"
            ref={numero}
            placeholder="Saisir un numéro"
          />
          <button
            className="bg-yellow-600 px-2 py-1 rounded-md"
            onClick={() => {
              let client = clients.find(
                (item) => item.numero == numero.current.value
              );
              if (!client) {
                return alert("Ce numéro n'existe pas");
              }
              let achatsClients = achats.filter(
                (item) => item.numero == numero.current.value
              );
              setClientFiltres({
                nom: client.nom,
                prenom: client.prenom,
                achats: [...achatsClients],
              });
            }}
          >
            Filtrer
          </button>
        </div>
        {console.log(numero)}
        <ul>
          <li>
            Nom :{clientFiltres.nom} Prénom :{clientFiltres.prenom}
          </li>
        </ul>
        <table className="border-2 w-[500px] text-center border-black">
          <thead>
            <tr>
              <th>Code produit</th>
              <th>Intitule</th>
              <th>Quantite</th>
              <th>Prix</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {clientFiltres.achats.map((item, index) => {
              let total = getProduitByCode(item.codeProduit).prix * item.qte;
              totalAchats.push(total);
              return (
                <tr key={index}>
                  <td>{item.codeProduit}</td>
                  <td>{getProduitByCode(item.codeProduit).intitule}</td>
                  <td>{item.qte}</td>
                  <td>{getProduitByCode(item.codeProduit).prix}</td>
                  <td>{total}</td>
                </tr>
              );
            })}
            <tr>
              <td colSpan={5}>
                Total des achats :
                {totalAchats.reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Facture;
