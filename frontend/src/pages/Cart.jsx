import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, increase, decrease, removeItem } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((s, i) => s + (i.price * (i.qty || 1)), 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>No items in cart</p>}
      {cart.map(item => (
        <div key={item._id} style={{ display: "flex", gap: 8, alignItems: "center", background: "#fff", padding: 8, borderRadius: 8, marginBottom: 8 }}>
          <div style={{ flex: 1 }}>
            <strong>{item.name}</strong>
            <div>₹{item.price} x {item.qty}</div>
          </div>
          <div>
            <button onClick={() => decrease(item._id)}>-</button>
            <button onClick={() => increase(item._id)} style={{ marginLeft: 6 }}>+</button>
          </div>
          <button onClick={() => removeItem(item._id)} style={{ marginLeft: 8, color: "red" }}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
      <button onClick={() => navigate("/payment")} style={{ padding: 10, background: "#10b981", color: "white", border: "none", borderRadius: 8 }}>Proceed to Payment</button>
    </div>
  );
}
