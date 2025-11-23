import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // simple local validation
    if (!email || !pass) return alert("Enter email and password");

    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: pass })
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        alert("Login successful");
        navigate("/");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      alert("Cannot reach server");
    }
  };

  return (
    <div style={{
      display: "flex",
      minHeight: "80vh",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <form onSubmit={handleLogin} style={{ width: 360, background: "#fff", padding: 20, borderRadius: 12, boxShadow: "0 6px 20px rgba(0,0,0,0.08)" }}>
        <h2 style={{ marginTop: 0 }}>Sign in</h2>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: 10, marginBottom: 10 }} />
        <input placeholder="Password" type="password" value={pass} onChange={(e) => setPass(e.target.value)} style={{ width: "100%", padding: 10, marginBottom: 12 }} />
        <button type="submit" style={{ width: "100%", padding: 10, background: "#06b6d4", border: "none", color: "white", borderRadius: 8 }}>Sign / Log In</button>
      </form>
    </div>
  );
}
