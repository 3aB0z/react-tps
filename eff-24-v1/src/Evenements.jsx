export default function Evenements({ evenements }) {
  let totalCouts = 0;

  return (
    <>
      <table className="w-[90%] mt-8 table-auto border-collapse bg-gray-800 mx-auto rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-900">
            <th className="text-white py-2 border border-slate-500 bg-slate-800">
              Thème
            </th>
            <th className="text-white py-2 border border-slate-500 bg-slate-800">
              Date de début
            </th>
            <th className="text-white py-2 border border-slate-500 bg-slate-800">
              Date de fin
            </th>
            <th className="text-white py-2 border border-slate-500 bg-slate-800">
              Description
            </th>
            <th className="text-white py-2 border border-slate-500 bg-slate-800">
              Coût journalier
            </th>
            <th className="text-white py-2 border border-slate-500 bg-slate-800">
              Durée (jours)
            </th>
            <th className="text-white py-2 border border-slate-500 bg-slate-800">
              Coût Total Evénements
            </th>
          </tr>
        </thead>
        <tbody>
          {evenements.map((item, index) => {
            totalCouts += item.durée * item.cout_journalier;
            return (
              <tr className="bg-slate-700" key={index}>
                <td className="text-slate-200 p-2 border border-slate-500">
                  {item.thème}
                </td>
                <td className="text-slate-200 p-2 border border-slate-500">
                  {item.date_debut}
                </td>
                <td className="text-slate-200 p-2 border border-slate-500">
                  {item.date_fin}
                </td>
                <td className="text-slate-200 p-2 border border-slate-500">
                  {item.description}
                </td>
                <td className="text-slate-200 p-2 border border-slate-500">
                  {item.cout_journalier}
                </td>
                <td className="text-slate-200 p-2 border border-slate-500">
                  {item.durée}
                </td>
                <td className="text-slate-200 p-2 border border-slate-500">
                  {item.durée * item.cout_journalier}
                </td>
              </tr>
            );
          })}
          <tr className="bg-gray-800">
            <th
              colSpan={7}
              className="text-gray-300 text-start p-3 border border-gray-700 font-medium"
            >
              Total des coûts des événements assurés est : {totalCouts} DH
            </th>
          </tr>
        </tbody>
      </table>
    </>
  );
}
