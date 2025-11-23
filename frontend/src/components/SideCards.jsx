import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function SideCards() {
  const [items, setItems] = useState([]);
  const { addToCart } = useCart();

  // static fallback items if backend not ready
  const FALLBACK = [
    { _id: "v1", name: "Tomato", price: 10, unit: "/kg", category: "veg", img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg" },
    { _id: "f1", name: "Banana", price: 40, unit: "/dozen", category: "fruit", img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg" },
    { _id: "n1", name: "Chicken", price: 250, unit: "/kg", category: "non-veg", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Raw_chicken_breast.jpg/400px-Raw_chicken_breast.jpg" }
  ];

  useEffect(() => {
    // try fetch from backend, fall back to static items
    fetch("http://localhost:5000/api/products")
      .then(r => r.json())
      .then(data => setItems(data.slice(0, 6)))
      .catch(() => setItems(FALLBACK));
  }, []);

  return (
    <div style={{
      background: "#fff",
      padding: "12px",
      borderRadius: 10,
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
    }}>
      <h3 style={{ marginTop: 0 }}>Quick Cards</h3>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map(item => (
          <div key={item._id} style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            padding: "8px",
            borderRadius: 8,
            border: "1px solid #f0f0f0"
          }}>
            <img src={item.img} alt="" style={{ width: 60, height: 50, objectFit: "cover", borderRadius: 6 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700 }}>{item.name}</div>
              <div style={{ color: "#0ea5a4" }}>₹{item.price}{item.unit}</div>
            </div>
            <button onClick={() => addToCart(item)} style={{
              background: "#10b981",
              color: "white",
              border: "none",
              padding: "6px 8px",
              borderRadius: 6,
              cursor: "pointer"
            }}>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}
