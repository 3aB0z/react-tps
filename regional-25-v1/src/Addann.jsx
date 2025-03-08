import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inserer } from "./redux/actions/actions";
import { Link } from "react-router-dom";

export default function Addann() {
  const [formInputs, setFormInputs] = useState({
    texte: "",
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
    dispatch(inserer({ ...formInputs }));
  }

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <form className="w-2/3 flex flex-col space-y-3 p-4">
          <div className="flex justify-between">
            <label className="w-1/4">
              Texte de l&apos;annonce(250 characteres max)
            </label>
            <textarea
              value={formInputs.texte}
              onChange={(e) =>
                setFormInputs((prv) => {
                  return { ...prv, texte: e.target.value };
                })
              }
              className="w-3/4 border border-slate-700 rounded"
            ></textarea>
          </div>
          <div className="flex justify-between">
            <div className="w-1/2 space-x-4">
              <label>Categorie</label>
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
            <div className="w-1/2 space-x-4">
              <label>Region</label>
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
            </div>
          </div>
          <div className="flex justify-between">
            <label className="w-1/4">Prix (propose)</label>
            <input
              type="number"
              value={formInputs.prix}
              onChange={(e) =>
                setFormInputs((prv) => {
                  return { ...prv, prix: e.target.value };
                })
              }
              className="w-3/4 border border-slate-700 rounded"
            />
          </div>
          <div className="flex justify-between">
            <label className="w-1/4">N de telephone</label>
            <input
              type="number"
              value={formInputs.tel}
              onChange={(e) =>
                setFormInputs((prv) => {
                  return { ...prv, tel: e.target.value };
                })
              }
              className="w-3/4 border border-slate-700 rounded"
            />
          </div>
          <div className="flex justify-between">
            <label>Code Postal</label>
            <input
              type="number"
              value={formInputs.codepostal}
              onChange={(e) =>
                setFormInputs((prv) => {
                  return { ...prv, codepostal: e.target.value };
                })
              }
              className="border border-slate-700 rounded"
            />
            <label>Ville</label>
            <input
              type="text"
              value={formInputs.ville}
              onChange={(e) =>
                setFormInputs((prv) => {
                  return { ...prv, ville: e.target.value };
                })
              }
              className="border border-slate-700 rounded"
            />
          </div>
          <Link
            to={"/annsbyreg"}
            onClick={(e) => handleSubmit(e)}
            className="bg-emerald-400 text-center p-1.5 rounded"
          >
            Valider votre annonce
          </Link>
        </form>
      </div>
    </>
  );
}
