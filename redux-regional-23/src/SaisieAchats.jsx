import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ajouterAchatAction,
  supprimerAchatAction,
} from "./redux/actions/achatsActions";
import { Link } from "react-router-dom";
import { modifierProductAction } from "./redux/actions/productActions";

function SaisieAchats() {
  const produits = useSelector((state) => state.produits);
  const [achatsFiltres, setAchatsFiltres] = useState([]);
  const [produit, setProduit] = useState({
    numero: "",
    codeProduit: "",
    qte: 0,
  });
  const numero = useRef("");
  const achats = useSelector((state) => state.achats);
  const dispatch = useDispatch();
  function modifierAchat() {
    dispatch(ajouterAchatAction({ ...produit }));
    dispatch(
      modifierProductAction({
        ...getProduitByCode(produit.codeProduit),
        qteStockee:
          getProduitByCode(produit.codeProduit).qteStockee - produit.qte,
      })
    );
    setProduit({ id: "", codeProduit: "", qte: 0 });
  }
  function supprimerAchat(id) {
    dispatch(supprimerAchatAction(id));
  }
  function onchangeInputs(e) {
    const name = e.target.name;
    const value = e.target.value;
    setProduit({ ...produit, [name]: value });
  }
  function getProduitByCode(code) {
    if (code !== "") {
      return produits.find((item) => code == item.codeProduit);
    } else {
      return "";
    }
  }

  return (
    <>
      <div className="flex w-full justify-center">
        <Link
          to="/Facture"
          className="bg-purple-600 text-center mt-5 text-white w-28 h-7 rounded-md"
        >
          Facture
        </Link>
      </div>
      <div className="flex  justify-center  h-[400px] mt-10">
        <form
          action=""
          className="flex flex-col justify-evenly items-center  w-80 rounded-md  bg-gray-400"
        >
          <input
            value={produit.numero}
            onChange={onchangeInputs}
            name="numero"
            type="text"
            className="w-40 pl-3 outline-none h-8 rounded-md"
            placeholder="Numéro"
          />

          <div>
            <select
              onChange={onchangeInputs}
              name="codeProduit"
              className="w-40 pl-3 outline-none h-8 rounded-md"
            >
              <option value="">Choisir un produit</option>
              {produits.map((item) => {
                return (
                  <option key={item.codeProduit} value={item.codeProduit}>
                    {item.intitule}
                  </option>
                );
              })}
            </select>
            <p className="mt-2">
              Quantite en stock est:{" "}
              {getProduitByCode(produit.codeProduit).qteStockee}
            </p>
          </div>

          <input
            value={produit.qte}
            onChange={onchangeInputs}
            name="qte"
            type="number"
            className="w-40 pl-3 outline-none h-8 rounded-md"
            placeholder="Quantité"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              modifierAchat();
            }}
            className="disabled:bg-slate-500 disabled:cursor-not-allowed bg-blue-600 cursor-pointer text-white w-28 h-7 rounded-md"
            disabled={
              getProduitByCode(produit.codeProduit).qteStockee &&
              getProduitByCode(produit.codeProduit).qteStockee >= produit.qte &&
              produit.qte > 0
                ? false
                : true
            }
          >
            Ajouter
          </button>
        </form>
      </div>
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
              setAchatsFiltres([
                ...achats.filter((item) => {
                  return item.numero == numero.current.value;
                }),
              ]);
            }}
          >
            Filtrer
          </button>
        </div>
        <ul>
          {achatsFiltres.map((item, index) => {
            return (
              <li key={index}>
                Numéro :{item.numero}
                Achat : {getProduitByCode(item.codeProduit).intitule}
                Quantite: {item.qte}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full flex justify-center mt-4   ">
        <table className="border-2 w-[500px] text-center border-black">
          <thead>
            <tr>
              <th>Numéro</th>
              <th>Produit</th>
              <th>Quantite</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {achats.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.numero}</td>
                  <td>{getProduitByCode(item.codeProduit).intitule}</td>
                  <td>{item.qte}</td>
                  <td>
                    <button
                      className="bg-red-600 px-2 py-1 rounded-md"
                      onClick={() => {
                        supprimerAchat(item.numero);
                      }}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SaisieAchats;
