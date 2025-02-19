import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Product from "./components/ProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import SearchItem from "./components/SearchItem";
import Cart from "./components/Cart";
import { items } from "./components/CartContext";
import { useState } from "react";

function App() {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);
  return (
    <Router>
      <div className="content">
        <Sidebar setData={setData}></Sidebar>
        <div className="display">
          <Navbar cart={cart}></Navbar>
          <Routes>
            <Route
              path="/"
              element={<Product cart={cart} setCart={setCart} items={data} />}
            />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/search/:term" element={<SearchItem />} />
            <Route
              path="/cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
