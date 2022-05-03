import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap/Navbar";
import Header from "./components/Header/Header";
import Products from "./components/Products/index";
import CartPage from "./components/Cart/index";
import NotFound from "./components/NotFound/NotFound";
import CartContextProvider from "./components/Cart/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
