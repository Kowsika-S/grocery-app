import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();
  const [amount] = useState(499); // Demo amount
  const [method, setMethod] = useState("");

  const handlePayment = () => {
    if (!method) {
      alert("Please select a payment method!");
      return;
    }
    alert(`Payment of ₹${amount} completed using ${method}!`);
  };

  return (
    <div 
      style={{
        textAlign: "center",
        padding: "30px",
        maxWidth: "450px",
        margin: "auto",
        marginTop: "40px",
        background: "#f8fafc",
        borderRadius: "12px",
        boxShadow: "0 0 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "#0f172a" }}>Payment Page</h2>
      <p style={{ marginTop: 10, fontSize: "16px", color: "#334155" }}>
        Complete your payment to place the order
      </p>

      <hr style={{ margin: "20px 0" }} />

      {/* Amount */}
      <h3 style={{ color: "#1e293b" }}>Total Amount</h3>
      <div
        style={{
          fontSize: "26px",
          color: "#16a34a",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        ₹{amount}
      </div>

      {/* Payment Methods */}
      <h3 style={{ color: "#1e293b" }}>Select Payment Method</h3>

      <div style={{ textAlign: "left", margin: "20px 0" }}>
        <label style={{ display: "block", margin: "10px 0" }}>
          <input
            type="radio"
            name="payment"
            value="UPI"
            onChange={(e) => setMethod(e.target.value)}
          />{" "}
          UPI (GPay / PhonePe / Paytm)
        </label>

        <label style={{ display: "block", margin: "10px 0" }}>
          <input
            type="radio"
            name="payment"
            value="Card"
            onChange={(e) => setMethod(e.target.value)}
          />{" "}
          Debit / Credit Card
        </label>

        <label style={{ display: "block", margin: "10px 0" }}>
          <input
            type="radio"
            name="payment"
            value="COD"
            onChange={(e) => setMethod(e.target.value)}
          />{" "}
          Cash on Delivery
        </label>
      </div>

      {/* Pay Button */}
      <button
        onClick={handlePayment}
        style={{
          padding: "12px 25px",
          background: "#16a34a",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          marginBottom: "25px",
        }}
      >
        Pay Now
      </button>

      <br />

      {/* Back to home */}
      <button
        onClick={() => navigate("/")}
        style={{
          padding: "12px 20px",
          background: "#0284c7",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          marginTop: "10px",
        }}
      >
        Back to Home
      </button>
    </div>
  );
}
