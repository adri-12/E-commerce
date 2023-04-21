import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import Sale from "./pages/Sale";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import ProductDetails from "./pages/ProductDetails";
import ViewAll from "./pages/ViewAll";
import { useSelector } from "react-redux";
import { RootState } from "./store/indexStore";
import LogIn from "./pages/LogIn";

function App() {
  // const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return (
    <div className="App">
      {window.location.pathname !== "/login" && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/men" element={<Men />} />
        <Route path="/view-all" element={<ViewAll />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/view-all" element={<ViewAll />} />
      </Routes>
      {window.location.pathname !== "/login" && <Footer />}
    </div>
  );
}

export default App;
