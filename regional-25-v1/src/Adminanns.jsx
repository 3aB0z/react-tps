import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Adminanns({ setAnnId }) {
  const annonces = useSelector((state) => state.annonces);

  return (
    <>
      <div className="flex flex-col items-center">
        <table className="mt-8 border-collapse bg-slate-700 mx-auto">
          <thead>
            <tr>
              <th className="text-white py-2 border border-slate-500 bg-slate-800">
                Email:
              </th>
              <th className="text-white py-2 border border-slate-500 bg-slate-800">
                Ville:
              </th>
              <th className="text-white py-2 border border-slate-500 bg-slate-800">
                Code Postal:
              </th>
              <th className="text-white py-2 border border-slate-500 bg-slate-800">
                Details:
              </th>
            </tr>
          </thead>
          <tbody>
            {annonces.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="text-slate-200 p-2 border border-slate-500">
                    {item.email}
                  </td>
                  <td className="text-slate-200 p-2 border border-slate-500">
                    {item.ville}
                  </td>
                  <td className="text-slate-200 p-2 border border-slate-500">
                    {item.codepostal}
                  </td>
                  <td className="text-slate-200 p-2 border border-slate-500">
                    <Link
                      to={"/detailann"}
                      onClick={() => setAnnId(item.id)}
                      className="text-blue-400 underline"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
