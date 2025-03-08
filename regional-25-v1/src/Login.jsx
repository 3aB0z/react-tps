import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Login({ setUser }) {
  const [formInputs, setFormInputs] = useState({
    id: null,
    uname: "",
    upass: "",
  });

  const users = useSelector((state) => state.users);

  function validateLogin() {
    const isUser = users.find(
      (item) => item.uname == formInputs.uname && item.upass == formInputs.upass
    );

    if (isUser) {
      setUser(isUser);
    }
  }

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center space-y-6">
        <div className="text-xl font-medium text-slate-800 text-center">
          <h1>Vous etes deja membre :</h1>
          <p>Entrer votre parametres d&apos;acces.</p>
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
          onClick={validateLogin}
          className="bg-emerald-400 text-white px-3 py-1 rounded hover:bg-emerald-500"
        >
          Se connecter
        </Link>
      </div>
    </>
  );
}
