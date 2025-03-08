import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { inscrir } from "./redux/actions/actions";

export default function Register({ setUser }) {
  const [formInputs, setFormInputs] = useState({
    id: null,
    uname: "",
    upass: "",
  });

  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  function inscription() {
    dispatch(inscrir(formInputs));
    setUser(formInputs);
  }

  useEffect(() => {
    const newId = users.length;
    setFormInputs((prv) => {
      return { ...prv, id: newId };
    });
  }, [users.length]);

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center space-y-6">
        <div className="text-xl font-medium text-slate-800 text-center">
          <h1>Vous etes nouveau membre :</h1>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div>
            <label>Nom de l&apos;utilisateur: </label>
            <input
              type="text"
              value={formInputs.uname}
              onChange={(e) =>
                setFormInputs((prv) => {
                  return { ...prv, uname: e.target.value };
                })
              }
              className="border border-slate-400 rounded"
            />
          </div>
          <div>
            <label>Mot de passe: </label>
            <input
              type="password"
              value={formInputs.upass}
              onChange={(e) =>
                setFormInputs((prv) => {
                  return { ...prv, upass: e.target.value };
                })
              }
              className="border border-slate-400 rounded"
            />
          </div>
        </div>
        <Link
          to={"/annsbyreg"}
          onClick={inscription}
          className="bg-emerald-400 text-white px-3 py-1 rounded hover:bg-emerald-500"
        >
          Inscrir
        </Link>
      </div>
    </>
  );
}
