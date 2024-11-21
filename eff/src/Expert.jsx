import Evenements from "./Evenements";

export default function Expert({expert}){
    return (
      <div>
        <li className="font-semibold">{expert.nom_complet}</li>
        <Evenements evenements={expert.événements}></Evenements>
      </div>
    );
}
