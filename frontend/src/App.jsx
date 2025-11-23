import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideCards from "./components/SideCards";
import { CartProvider } from "./context/CartContext";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Login from "./pages/Login";

export default function App() {
  // Layout: Navbar on top, content area with main + side cards
  return (
    <CartProvider>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <div style={{
          display: "flex",
          flex: 1,
          gap: "16px",
          padding: "16px",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%"
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/login" element={<Login />} />
              {/* if unknown route, go home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>

          {/* Side panel always visible on wide screens */}
          <aside style={{ width: "320px", display: "block" }}>
            <SideCards />
          </aside>
        </div>
      </div>
    </CartProvider>
  );
}
