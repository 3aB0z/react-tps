import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Calcul_frais from "./Calcul_frais";
import Verification from "./Verification";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-full flex flex-col items-center">
          <Menu />
          <Routes>
            <Route path="/" element={<Calcul_frais />} />
            <Route path="/verification" element={<Verification />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
