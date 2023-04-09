import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import ProductDetail from "./Components/ProductDetail";
import Cart from "./Components/Cart";
import { routes } from "./Routes";
import Categories from "./Components/Categories";
import SingleProduct from "./Components/AllProducts";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Products />}></Route>
            <Route
              exact
              path="/category/all-products"
              element={<SingleProduct />}
            ></Route>
            <Route
              exact
              path="/category/:categoryName"
              element={<Categories />}
            ></Route>
            <Route
              exact
              path="/product/:productId"
              element={<ProductDetail />}
            ></Route>
          </Routes>
          <Cart />
        </Router>
      </div>
    </>
  );
}

export default App;
