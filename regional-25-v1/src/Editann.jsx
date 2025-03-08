import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { modifier } from "./redux/actions/actions";

export default function Editann({ annId }) {
  const [formInputs, setFormInputs] = useState({
    id: annId,
    texte: "",
    email: "",
    catid: 1,
    regid: 1,
    prix: "",
    tel: "",
    codepostal: "",
    ville: "",
  });

  const regions = useSelector((state) => state.regions);
  const categories = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(modifier({ ...formInputs }));
  }

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-full h-full flex justify-center space-x-2 py-32">
          <div className="h-full flex flex-col space-y-1.5 font-medium text-end">
            <p>Id de l&apos;annonce: </p>
            <p>Texte de l&apos;annonce: </p>
            <p>N de telephone: </p>
            <p>Adresse de messagerie: </p>
            <p>Ville: </p>
            <p>Code Postal: </p>
            <p>Montant: </p>
            <p>Utilisateur du site: </p>
            <p>Region: </p>
            <p>Categorie: </p>
          </div>
          <div className="h-full flex flex-col space-y-1 text-slate-800">
            <p>{annId}</p>
            <input
              type="text"
              value={formInputs.texte}
              onChange={(e) =>
                setFormInputs((prv) => {
                  return { ...prv, texte: e.target.value };
                })
              }
              className="border border-slate-400 rounded"
            />
            <input
              type="text"
              value={formInputs.tel}
              onChange={(e) =>
                setFormInputs((prv) => {
                  return { ...prv, tel: e.target.value };
                })
              }
              className="border border-slate-400 rounded"
            />
            <input
              type="text"
              value={formInputs.email}
              onChange={(e) =>
                setFormInputs((prv) => {
                  return { ...prv, email: e.target.value };
                })
              }
              className="border border-slate-400 rounded"
            />
            <input
              type="text"
              value={formInputs.ville}
              onChange={(e) =>
                setFormInputs((prv) => {
                  return { ...prv, ville: e.target.value };
                })
              }
              className="border border-slate-400 rounded"
            />
            <input
              type="text"
              value={formInputs.codepostal}
              onChange={(e) =>
                setFormInputs((prv) => {
                  return { ...prv, codepostal: e.target.value };
                })
              }
              className="border border-slate-400 rounded"
            />
            <input
              type="text"
              value={formInputs.prix}
              onChange={(e) =>
                setFormInputs((prv) => {
                  return { ...prv, prix: e.target.value };
                })
              }
              className="border border-slate-400 rounded"
            />
            <input type="text" className="border border-slate-400 rounded" />
            <select
              onChange={(e) =>
                setFormInputs((prv) => {
                  return { ...prv, regid: e.target.value };
                })
              }
              value={formInputs.regid}
              className="border border-slate-700 rounded w-[197px]"
            >
              {regions.map((region) => {
                return (
                  <option key={region.regid} value={region.regid}>
                    {region.regnom}
                  </option>
                );
              })}
            </select>
            <select
              onChange={(e) =>
                setFormInputs((prv) => {
                  return { ...prv, catid: e.target.value };
                })
              }
              value={formInputs.catid}
              className="border border-slate-700 rounded w-[170px]"
            >
              {categories.map((categorie) => {
                return (
                  <option key={categorie.catid} value={categorie.catid}>
                    {categorie.catnom}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="w-full h-10 flex justify-center items-center space-x-2 text-slate-800 py-2 font-medium">
          <Link to={"/adminanns"} onClick={handleSubmit}>
            Mettre a jour
          </Link>
          <span className="w-px h-full bg-slate-500" />
          <Link to={"/detailann"}>Annuler</Link>
        </div>
      </div>
    </>
  );
}
