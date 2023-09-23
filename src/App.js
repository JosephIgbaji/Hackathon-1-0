import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";
import ContactPage from "./components/ContactPage";
import Registration from "./components/Registration";
import Home from "./components/Home";
import { useState } from "react";
// import ClickableLinks from "./components/ClickableLinks";
import HamburgerNav from "./components/HamburgerNav";

function App() {
  const [navState, setNavState] = useState(false);

  const handleNavToggle = () => {
    setNavState(!navState);
  };

  return (
    <div className="container">
      <Navbar onClick={handleNavToggle} navState={navState} />
      {navState && <HamburgerNav />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
