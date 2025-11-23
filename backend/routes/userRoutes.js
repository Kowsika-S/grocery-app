import express from "express";
const router = express.Router();

// TEMP LOGIN — accepts only test@gmail.com / 123456
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  console.log("Login request received:", req.body);

  // TEMP credentials
  if (email === "test@gmail.com" && password === "123456") {
    return res.json({ success: true, message: "Login successful" });
  }

  return res.status(400).json({ success: false, message: "Invalid credentials" });
});

export default router;
