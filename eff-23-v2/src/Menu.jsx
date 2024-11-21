import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Verification from "./Verification";
import Calcul_frais from "./Calcul_frais";

export default function Menu() {
  return (
    <>
      <Router>
        <header>
          <ul>
            <li>
              <Link to="/verification">Verification</Link>
            </li>
            <li>
              <Link to="/calcul_frais">Calculator</Link>
            </li>
          </ul>
        </header>
        <Routes>
          <Route path="/verification" element={<Verification />} />
          <Route path="/calcul_frais" element={<Calcul_frais />} />
        </Routes>
      </Router>
    </>
  );
}
