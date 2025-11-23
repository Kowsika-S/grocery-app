import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const count = cart.reduce((s, i) => s + (i.qty || 1), 0);

  const linkStyle = ({ isActive }) => ({
    padding: "8px 12px",
    borderRadius: 20,
    textDecoration: "none",
    color: isActive ? "white" : "#064e3b",
    background: isActive ? "#10b981" : "transparent",
    fontWeight: 600
  });

  return (
    <header style={{
      background: "#06b6d4",
      padding: "12px 0",
      boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px"
      }}>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <div style={{ fontWeight: 800, fontSize: 18, color: "white" }}>FreshMart</div>
          <nav style={{ display: "flex", gap: "8px" }}>
            <NavLink to="/" style={linkStyle}>Home</NavLink>
            <NavLink to="/" style={linkStyle}>Cards</NavLink> {/* Cards are in sidepanel, still link to Home */}
            <NavLink to="/cart" style={linkStyle}>Cart</NavLink>
            <NavLink to="/payment" style={linkStyle}>Payment</NavLink>
            <NavLink to="/login" style={linkStyle}>Login</NavLink>
          </nav>
        </div>

        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <button
            onClick={() => navigate("/cart")}
            style={{
              background: "white",
              border: "none",
              padding: "8px 12px",
              borderRadius: 10,
              fontWeight: 700,
              cursor: "pointer"
            }}
          >
            🛒 Cart ({count})
          </button>
        </div>
      </div>
    </header>
  );
}
