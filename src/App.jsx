import { useEffect } from "react";
import { useLocation, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Menue from "./pages/Menue";
import ProductDetails from "./pages/ProductDetails";
// import Login from "./pages/Login";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menue />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        {/* <Route path="login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
