import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Annsbyreg() {
  const [selectedRegId, setSelectedRegId] = useState(1);
  const [filteredAnnonces, setFilteredAnnonces] = useState([]);

  const regions = useSelector((state) => state.regions);
  const annonces = useSelector((state) => state.annonces);

  function handleRegChange(regId) {
    setSelectedRegId(regId);
    const newFilteredAnnonces = annonces.filter((item) => item.regid == regId);
    setFilteredAnnonces(newFilteredAnnonces);
  }

  useEffect(() => {
    handleRegChange(selectedRegId);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center space-y-6 py-4">
        <select
          onChange={(e) => handleRegChange(e.target.value)}
          value={selectedRegId}
        >
          {regions.map((region) => (
            <option key={region.regid} value={region.regid}>
              {region.regnom}
            </option>
          ))}
        </select>

        <div className="w-1/2 flex flex-col space-y-4">
          {filteredAnnonces.length !== 0 ? (
            filteredAnnonces.map((annonce) => (
              <div key={annonce.id}>
                <div className="bg-slate-200 flex justify-between border-b-2 border-b-slate-400">
                  <div className="flex space-x-1">
                    <div>{annonce.ville}</div>
                    <div>({annonce.tel})</div>
                  </div>
                  <div>{annonce.email}</div>
                </div>
                <div>{annonce.texte}</div>
              </div>
            ))
          ) : (
            <p>Il n&apos;y a aucune annonce pour cette région !</p>
          )}
        </div>
      </div>
    </>
  );
}
