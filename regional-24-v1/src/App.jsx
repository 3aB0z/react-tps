import { useEffect, useState } from "react";
import InfoProd from "./InfoProd";
import Affiche from "./Affiche";
import Recherche from "./Recherche";
import Menu from "./Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/produits")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return setProduits(data);
      });
  });

  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col justify-center items-center">
          <Menu />
          <Routes>
            <Route path="/" element={<InfoProd />} />
            <Route
              path="recherche"
              element={<Recherche produits={produits} />}
            />
            <Route path="/affiche" element={<Affiche produits={produits} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
