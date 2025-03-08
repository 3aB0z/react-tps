import { Route, Routes } from "react-router-dom";
import Annsbyreg from "./Annsbyreg";
import Addann from "./Addann";
import Adminanns from "./Adminanns";
import Editann from "./Editann";
import Delann from "./Delann";
import Register from "./Register";
import Login from "./Login";
import DetailAnn from "./DetailAnn";

export default function Content({ annId, setAnnId, user, setUser }) {
  return (
    <>
      <div className="w-3/4 h-full">
        <Routes>
          {user.id && (
            <>
              <Route path="/annsbyreg" element={<Annsbyreg />} />
              <Route path="/addann" element={<Addann />} />
              <Route
                path="/adminanns"
                element={<Adminanns setAnnId={(value) => setAnnId(value)} />}
              />
              <Route path="/editann" element={<Editann annId={annId} />} />
              <Route path="/detailann" element={<DetailAnn annId={annId} />} />
              <Route path="/delann" element={<Delann annId={annId} />} />
            </>
          )}
          <Route
            path="/register"
            element={<Register setUser={(value) => setUser(value)} />}
          />
          <Route
            path="/login"
            element={<Login setUser={(value) => setUser(value)} />}
          />
        </Routes>
      </div>
    </>
  );
}
