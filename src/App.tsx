import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Women from  "./pages/Women";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import Sale from "./pages/Sale";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SaleBanner from "./components/SaleBanner";

function App() {
const [toggleNavbar, setToggleNavbar] = useState(false);
  return (
    <div className="App">
      <Navbar toggleNavbar={toggleNavbar} setToggleNavbar={setToggleNavbar}/>
        <Routes>
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/sale" element={<Sale />} />
      </Routes>
      <SaleBanner />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
