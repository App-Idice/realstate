import React from "react";
import { useNavigate } from "react-router-dom";
import flat1 from "../../assets/flat1.webp";
import flat2 from "../../assets/flat2.jpg";
import flat3 from "../../assets/flat3.jpg";
import flat4 from "../../assets/flat4.jpg";
import flat5 from "../../assets/flat5.jpg";

const flatData = [
  {
    id: 1,
    image: flat1,
    bhk: "2 BHK",
    type: "Apartment",
    size: "1100 sqft",
    facing: "East",
    address: "Sector 10, Delhi"
  },
  {
    id: 2,
    image: flat2,
    bhk: "3 BHK",
    type: "Penthouse",
    size: "1500 sqft",
    facing: "North",
    address: "Sector 137, Noida"
  },
  {
    id: 3,
    image: flat3,
    bhk: "1 BHK",
    type: "Studio",
    size: "700 sqft",
    facing: "West",
    address: "Indirapuram, Ghaziabad"
  },
  {
    id: 4,
    image: flat4,
    bhk: "2 BHK",
    type: "Builder Floor",
    size: "1000 sqft",
    facing: "South",
    address: "Vaishali, Ghaziabad"
  },
  {
    id: 5,
    image: flat5,
    bhk: "4 BHK",
    type: "Duplex",
    size: "1800 sqft",
    facing: "East",
    address: "Golf Course Road, Gurugram"
  }
];

const FlatListPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Seller Properties Listing
      </h1>

      {flatData.map((flat) => (
        <div
          key={flat.id}
          style={{
            display: "flex",
            gap: "30px",
            padding: "20px",
            marginBottom: "30px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
          }}
        >
          <img
            src={flat.image}
            alt="Flat"
            style={{
              width: "400px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />

          <div style={{ fontSize: "16px", lineHeight: "1.8", flex: 1 }}>
            <p><strong>BHK:</strong> {flat.bhk}</p>
            <p><strong>Type:</strong> {flat.type}</p>
            <p><strong>Size:</strong> {flat.size}</p>
            <p><strong>Facing:</strong> {flat.facing}</p>
            <p><strong>Address:</strong> {flat.address}</p>

  <button
              onClick={() => navigate(`/seller/${flat.id}`)}
              style={{
                marginTop: "10px",
                width:"30%",
                padding: "10px 16px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              View More
            </button>
            {/* <button
              onClick={() => navigate(`/seller/${flat.id}`)}
              style={{
                marginTop: "10px",
                width:"30%",
                padding: "10px 16px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              View More
            </button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlatListPage;
