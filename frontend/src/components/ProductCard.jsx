import { useCart } from "../context/CartContext";

export default function ProductCard({ item }) {
  const { addToCart } = useCart();

  return (
    <div style={{
      width: "180px",
      background: "#fff",
      padding: "10px",
      borderRadius: "10px",
      boxShadow: "0 0 5px #ccc"
    }}>
      <img src={item.img} style={{ width: "100%", height: "120px", borderRadius: "10px" }} />
      <h3 style={{ fontSize: "16px" }}>{item.name}</h3>
      <p style={{ margin: "0", color: "green" }}>₹{item.price}{item.unit}</p>

      <button
        onClick={() => addToCart(item)}
        style={{
          width: "100%",
          padding: "8px",
          marginTop: "10px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}>
        Add to Cart
      </button>
    </div>
  );
}
