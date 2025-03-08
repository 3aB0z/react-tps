import { Link } from "react-router-dom";

export default function Header() {
  function deconnecter() {
    
  }

  return (
    <>
      <header className="w-full h-12 bg-slate-200 flex justify-between items-center px-2 py-3">
        <p>Header</p>
        <Link
          to={"/login"}
          onClick={deconnecter}
          className="bg-rose-400 text-white px-3 py-1 rounded"
        >
          Deconnecter
        </Link>
      </header>
    </>
  );
}
