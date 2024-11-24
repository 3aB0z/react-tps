export default function DetailsLivre({ livres }) {
  return (
    <>
      <h1 className="text-3xl text-sky-700 font-bold text-center mb-8">
        Les Details de Tous les Livres :
      </h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">ISBN</th>
            <th className="border border-gray-300 p-2">Titre</th>
            <th className="border border-gray-300 p-2">Auteur</th>
            <th className="border border-gray-300 p-2">Prix</th>
            <th className="border border-gray-300 p-2">Genre</th>
          </tr>
        </thead>
        <tbody>
          {livres.map((livre, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 p-2">{livre.ISBN}</td>
              <td className="border border-gray-300 p-2">{livre.Titre}</td>
              <td className="border border-gray-300 p-2">{livre.Auteur}</td>
              <td className="border border-gray-300 p-2">{livre.Prix}</td>
              <td className="border border-gray-300 p-2">{livre.Genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
