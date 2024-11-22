import { useSelector } from "react-redux";

export default function ListProduit() {
  const produits = useSelector((state) => state.produits);

  return (
    <>
      <h1 className="text-sky-600 mt-8 text-4xl font-bold">
        Liste des produits:
      </h1>
      <table className="mt-8 border-collapse bg-slate-700 mx-auto">
        <thead>
          <tr>
            <th className="text-white py-2 border border-slate-500 bg-slate-800">
              Reference:
            </th>
            <th className="text-white py-2 border border-slate-500 bg-slate-800">
              Nom Produit:
            </th>
            <th className="text-white py-2 border border-slate-500 bg-slate-800">
              Description:
            </th>
            <th className="text-white py-2 border border-slate-500 bg-slate-800">
              Prix:
            </th>
            <th className="text-white py-2 border border-slate-500 bg-slate-800">
              Categorie:
            </th>
            <th className="text-white py-2 border border-slate-500 bg-slate-800">
              Image:
            </th>
          </tr>
        </thead>
        <tbody>
          {produits.map((item, index) => {
            return (
              <tr key={index}>
                <td className="text-slate-200 p-2 border border-slate-500">
                  {item.id}
                </td>
                <td className="text-slate-200 p-2 border border-slate-500">
                  {item.nomP}
                </td>
                <td className="text-slate-200 p-2 border border-slate-500">
                  {item.descP}
                </td>
                <td className="text-slate-200 p-2 border border-slate-500">
                  {item.prix} DH
                </td>
                <td className="text-slate-200 p-2 border border-slate-500">
                  {item.categorie.nomC}
                </td>
                <td className="text-slate-200 p-2 border border-slate-500">
                  {item.thumbnail}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
