import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

// ALL your 15 items
const items = [
  // Vegetables
  { name: "Tomato", price: 10, unit: "/kg", category: "veg", img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg" },
  { name: "Potato", price: 20, unit: "/kg", category: "veg", img: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg" },
  { name: "Cucumber", price: 15, unit: "/kg", category: "veg", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Cucumbers_and_blossom.jpg/500px-Cucumbers_and_blossom.jpg" },
  { name: "Carrot", price: 30, unit: "/kg", category: "veg", img: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Carrots_and_carrot_slices.jpg" },
  { name: "Spinach", price: 30, unit: "/bunch", category: "veg", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Spinach_in_basket.jpg/400px-Spinach_in_basket.jpg" },

  // Fruits
  { name: "Banana", price: 40, unit: "/dozen", category: "fruit", img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg" },
  { name: "Apple", price: 120, unit: "/kg", category: "fruit", img: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg" },
  { name: "Orange", price: 70, unit: "/kg", category: "fruit", img: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg" },
  { name: "Mango", price: 100, unit: "/kg", category: "fruit", img: "https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg" },
  { name: "Watermelon", price: 50, unit: "/each", category: "fruit", img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Watermelon_cross_BNC.jpg" },

  // Non-Veg
  { name: "Chicken Breast", price: 250, unit: "/kg", category: "non-veg", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Raw_chicken_breast.jpg/400px-Raw_chicken_breast.jpg" },
  { name: "Mutton Curry Cut", price: 650, unit: "/kg", category: "non-veg", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Raw_goat_meat_pieces.jpg/400px-Raw_goat_meat_pieces.jpg" },
  { name: "Prawns", price: 450, unit: "/kg", category: "non-veg", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_shrimps.jpg/400px-White_shrimps.jpg" },
  { name: "Fish (Rohu)", price: 320, unit: "/kg", category: "non-veg", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ikan_mentah.jpg/400px-Ikan_mentah.jpg" },
  { name: "Crab", price: 700, unit: "/kg", category: "non-veg", img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Blue_crab.jpg" }
];

const startSeeding = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected!");
    
    console.log("Clearing old products...");
    await Product.deleteMany({});

    console.log("Inserting new products...");
    await Product.insertMany(items);

    console.log("🎉 Seeding completed successfully!");

    await mongoose.connection.close();
    console.log("MongoDB connection closed.");
  } catch (err) {
    console.error("❌ Error during seeding:", err);
  }
};

startSeeding();
