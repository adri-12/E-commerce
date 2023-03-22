import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from  "./pages/Women";
import AllItems from "./pages/Men";
import Contact from "./pages/Kids";
import Footer from "./components/Footer";

function App() {
const [toggleNavbar, setToggleNavbar] = useState(false);
  return (
    <div className="App">
      <Navbar toggleNavbar={toggleNavbar} setToggleNavbar={setToggleNavbar}/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<AllItems />} />
        <Route path="/" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
