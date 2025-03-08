import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <div className="w-1/4 h-full bg-slate-300 p-2">
        <div>
          <h1 className="text-lg font-medium text-slate-800">Espace membre</h1>
          <ul>
            <li className="underline text-blue-800">
              <Link to={"/login"}>Connection</Link>
            </li>
            <li className="underline text-blue-800">
              <Link to={"/register"}>Inscription</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-medium text-slate-800">Nos annonces</h1>
          <ul>
            <li className="underline text-blue-800">
              <Link to={"/annsbyreg"}>Consulter nos annonces</Link>
            </li>
            <li className="underline text-blue-800">
              <Link to={"/addann"}>Diffusez une annonce</Link>
            </li>
            <li className="underline text-blue-800">
              <Link to={"/adminanns"}>Administrer les annonces</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
