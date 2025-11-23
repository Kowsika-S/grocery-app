import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
      name: String,
      price: Number,
      qty: Number,
      img: String,
    }
  ],
  total: Number,
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema);
