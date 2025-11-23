import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  unit: String,
  category: String, // 'veg' | 'fruit' | 'non-veg'
  img: String
});

export default mongoose.model("Product", productSchema);
