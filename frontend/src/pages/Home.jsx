import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(r => r.json())
      .catch(() => {
        // fallback data
        const fallback = [
          // VEG
{ _id: "v1", name: "Tomato", price: 10, unit: "/kg", category: "veg",
  img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg"
},

{ _id: "v2", name: "Potato", price: 20, unit: "/kg", category: "veg",
  img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90YXRvfGVufDB8fDB8fHww"
},

{ _id: "v3", name: "Carrot", price: 30, unit: "/kg", category: "veg",
  img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90fGVufDB8fDB8fHww" 
},


{ _id: "v4", name: "Broccoli", price: 55, unit: "/kg", category: "veg",
  img: "https://upload.wikimedia.org/wikipedia/commons/0/03/Broccoli_and_cross_section_edit.jpg"
},

// FRUITS
{ _id: "f1", name: "Banana", price: 40, unit: "/dozen", category: "fruit",
  img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"
},

{ _id: "f2", name: "Apple", price: 120, unit: "/kg", category: "fruit",
  img: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"
},

{ _id: "f3", name: "Orange", price: 90, unit: "/kg", category: "fruit",
  img: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg"
},

// NON-VEG
  {
  _id: "n1",
  name: "Chicken",
  price: 250,
  unit: "/kg",
  category: "non-veg",
  img: "https://images.unsplash.com/photo-1682991136736-a2b44623eeba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbiUyMGJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D"

},

{ _id: "n2", name: "Eggs (12 pcs)", price: 70, unit: "/kg", category: "non-veg",
  img: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWdnfGVufDB8fDB8fHww"
},

{ _id: "n3", name: "Fish", price: 300, unit: "/kg", category: "non-veg",
  img: "https://images.unsplash.com/photo-1499125562588-29fb8a56b5d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaCUyMG1lYXR8ZW58MHx8MHx8fDA%3D"
},

// DAIRY
{ _id: "d1", name: "Milk 1L", price: 60, unit: "", category: "dairy",
  img: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWlsayUyMDElMjBsfGVufDB8fDB8fHww"
},

{ _id: "d2", name: "Butter", price: 85, unit: "/100g", category: "dairy",
  img: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVyfGVufDB8fDB8fHww"
},

{ _id: "d3", name: "Curd", price: 35, unit: "/500g", category: "dairy",
  img: "https://media.istockphoto.com/id/452368859/photo/cream-cheese-quark.webp?a=1&b=1&s=612x612&w=0&k=20&c=1wdw-sk-oImzR9m2y8sAcpglJnrfPpXmFfsqYw4cheM="
}

        ];
        setProducts(fallback);
      });
  }, []);

  const filtered =
    filter === "all"
      ? products
      : filter === "veg"
      ? products.filter(p => p.category === "veg" || p.category === "fruit")
      : products.filter(p => p.category === filter);

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <button onClick={() => setFilter("all")} style={btnStyle(filter === "all")}>All</button>
        <button onClick={() => setFilter("veg")} style={btnStyle(filter === "veg")}>Veg</button>
        <button onClick={() => setFilter("fruit")} style={btnStyle(filter === "fruit")}>Fruit</button>
        <button onClick={() => setFilter("non-veg")} style={btnStyle(filter === "non-veg")}>Non-Veg</button>
        <button onClick={() => setFilter("dairy")} style={btnStyle(filter === "dairy")}>Dairy</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 16 }}>
        {filtered.map(item => (
          <div key={item._id} style={cardStyle}>
            <img src={item.img} alt={item.name} style={imgStyle} />
            <h4 style={{ margin: "8px 0 4px" }}>{item.name}</h4>
            <div style={{ color: "#059669", fontWeight: 700 }}>₹{item.price}{item.unit}</div>
            <button onClick={() => addToCart(item)} style={addBtnStyle}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#fff",
  padding: 12,
  borderRadius: 10,
  boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
};

const imgStyle = {
  width: "100%",
  height: 120,
  objectFit: "cover",
  borderRadius: 8
};

const addBtnStyle = {
  marginTop: 8,
  width: "100%",
  padding: 8,
  background: "#10b981",
  color: "white",
  border: "none",
  borderRadius: 6,
  cursor: "pointer"
};

function btnStyle(active) {
  return {
    padding: "8px 12px",
    borderRadius: 20,
    border: active ? "none" : "1px solid #d1fae5",
    background: active ? "#10b981" : "white",
    color: active ? "white" : "#065f46",
    fontWeight: 700,
    cursor: "pointer"
  };
}
