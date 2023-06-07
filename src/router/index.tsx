import { Route, Routes } from "react-router-dom";

import { Products } from "../pages/Products";
import { Cart } from "../pages/Cart";
import { Checkout } from "../pages/Checkout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};
