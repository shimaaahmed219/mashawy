import { createBrowserRouter } from "react-router-dom";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Menue from "./pages/Menue";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menue />} />
        <Route path="/product/:id" element={<ProductDetails />} />

      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
