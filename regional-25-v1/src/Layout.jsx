import { useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

export default function Layout() {
  const [annId, setAnnId] = useState(1);
  const [user, setUser] = useState({
    id: null,
    uname: "",
    upass: "",
  });

  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <Header
          annId={annId}
          setAnnId={(value) => setAnnId(value)}
          user={user}
          setUser={(value) => setUser(value)}
        />
        <div className="w-full h-full flex">
          <Menu />
          <Content
            annId={annId}
            setAnnId={(value) => setAnnId(value)}
            user={user}
            setUser={(value) => setUser(value)}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
