import Evenements from "./Evenements";

export default function Expert({ expert }) {
  return (
    <div className="mt-16">
      <li className="text-xl font-semibold">{expert.nom_complet}</li>
      <Evenements evenements={expert.événements}></Evenements>
    </div>
  );
}
