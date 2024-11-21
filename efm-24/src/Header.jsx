import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";

export default function Header() {
  return (
    <>
      <BrowserRouter>
        <div>
          <h1 className="text-2xl">Bibliotheque</h1>
            <Link to="/details">Details</Link>
        </div>
        <div>
          <Routes>
            <Route path="./details" element={<Details />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
