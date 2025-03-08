import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function DetailAnn({ annId }) {
  const annonces = useSelector((state) => state.annonces);
  const regions = useSelector((state) => state.regions);
  const categories = useSelector((state) => state.categories);

  const [ann, setAnn] = useState({
    id: annId,
    texte: "",
    catid: 1,
    regid: 1,
    prix: "",
    tel: "",
    codepostal: "",
    ville: "",
  });

  function regionName() {
    const reg = regions.find((item) => item.regid == ann.regid);
    return reg.regnom;
  }

  function categorieName() {
    const cat = categories.find((item) => item.catid == ann.catid);
    return cat.catnom;
  }

  useEffect(() => {
    function getAnnById() {
      const newAnn = annonces.find((item) => item.id == annId);
      setAnn(newAnn);
    }

    getAnnById();
  }, [annId, annonces]);

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-full h-full flex justify-center space-x-2 py-32">
          <div className="h-full font-medium text-end">
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
          <div className="h-full text-slate-800">
            <p>{ann.id}</p>
            <p>{ann.texte}</p>
            <p>{ann.tel}</p>
            <p>{ann.email}</p>
            <p>{ann.ville}</p>
            <p>{ann.codepostal}</p>
            <p>{ann.prix}</p>
            <p className="inline-block">{}</p>
            <p>{regionName()}</p>
            <p>{categorieName()}</p>
          </div>
        </div>
        <div className="w-full h-10 flex justify-center items-center space-x-2 text-slate-800 py-2 font-medium">
          <Link to={"/editann"}>Modifier</Link>
          <span className="w-px h-full bg-slate-500" />
          <Link to={"/delann"}>Supprimer</Link>
          <span className="w-px h-full bg-slate-500" />
          <Link to={"/adminanns"}>Retourner a la liste des annonces</Link>
        </div>
      </div>
    </>
  );
}
