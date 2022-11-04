import { Routes, Route } from "react-router-dom";
import "./App.css";
import BasketCart from "./components/basket-cart-components";
import Product from "./components/products.components";

function App() {
   return (
      <div className="App">
         <h2>ALIŞVERİS SEPETİ</h2>
         <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/basket" element={<BasketCart />} />
         </Routes>
      </div>
   );
}

export default App;
