import React from "react";
import { useNavigate } from "react-router-dom";
import flat1 from '../../assets/flat1.webp';
import flat2 from "../../assets/flat2.jpg";
import flat3 from "../../assets/flat3.jpg";
import flat4 from "../../assets/flat4.jpg";
import flat5 from "../../assets/flat5.jpg";

const TenantFlatList = () => {
  const navigate = useNavigate();

  const flatData = [
    {
      id: 1,
      image: flat1,
      bhk: "2 BHK",
      type: "Apartment",
      size: "1100 sqft",
      facing: "East"
    },
    {
      id: 2,
      image: flat2,
      bhk: "3 BHK",
      type: "Penthouse",
      size: "1500 sqft",
      facing: "North"
    },
    {
      id: 3,
      image: flat3,
      bhk: "1 BHK",
      type: "Studio",
      size: "700 sqft",
      facing: "West"
    },
    {
      id: 4,
      image: flat4,
      bhk: "2 BHK",
      type: "Builder Floor",
      size: "1000 sqft",
      facing: "South"
    },
    {
      id: 5,
      image: flat5,
      bhk: "4 BHK",
      type: "Duplex",
      size: "1800 sqft",
      facing: "East"
    }
  ];

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Tenant Flats Available</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
        }}
      >
        {flatData.map((flat) => (
          <div
            key={flat.id}
            style={{
              display: "flex",
              gap: "1.5rem",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "10px",
              width: "100%",
              maxWidth: "700px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            {/* Image */}
            <img
              src={flat.image}
              alt="Flat"
              style={{
                width: "200px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />

            {/* Details */}
            <div style={{ flex: 1 }}>
              <p style={{ marginBottom: "4px", fontWeight: "bold", fontSize: "16px" }}>
                {flat.bhk}
              </p>
              <p style={{ marginBottom: "2px" }}>Type: {flat.type}</p>
              <p style={{ marginBottom: "2px" }}>Size: {flat.size}</p>
              <p style={{ marginBottom: "2px" }}>Facing: {flat.facing}</p>
              
              <button
                onClick={() => navigate(`/seller/${flat.id}`)}
                style={{
                  marginTop: "0.5rem",
                  width: "30%",
                  padding: "8px 14px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TenantFlatList;
