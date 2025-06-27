import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlatListPage from "./FlatListPage";

const SellerPage = () => {
  const navigate = useNavigate();

  const propertyTypes = ["Flat", "Apartment", "Farm House", "Land/Plot"];
  const residentialTypes = ["Apartment", "Villa", "Land", "Floor", "Building"];

  const [filters, setFilters] = useState({
    residentialType: "",
    priceRange: 5500000,
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...filters, [name]: value };
    setFilters(updated);
    console.log("Filters:", updated);
  };

  return (
    <div style={{ padding: "2rem" }}>
      {/* 🔹 Filter Section Above Property Type */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          marginBottom: "2rem",
          flexWrap: "wrap",
          alignItems: "flex-end",
        }}
      >
        {/* 🏠 Residential Type */}
        <div style={{ flex: 1, minWidth: "200px" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
            Residential Type
          </label>
          <select
            name="residentialType"
            value={filters.residentialType}
            onChange={handleFilterChange}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          >
            <option value="">Select Residential Type</option>
            {residentialTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* 💰 Price Range Slider */}
        <div style={{ flex: 1, minWidth: "250px" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
            Max Budget: ₹{parseInt(filters.priceRange).toLocaleString()}
          </label>
          <input
            type="range"
            name="priceRange"
            min="100000"
            max="10000000"
            step="50000"
            value={filters.priceRange}
            onChange={handleFilterChange}
            style={{ width: "100%", maxWidth: "250px" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#555", maxWidth: "250px" }}>
            <span>₹1 Lac</span>
            <span>₹1 Cr</span>
          </div>
        </div>
      </div>

      {/* 🔹 Heading */}
      <h2 style={{ fontSize: "24px", marginBottom: "1.5rem" }}>Select Property Type</h2>

      {/* 🔹 Property Type Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "1rem",
        }}
      >
        {propertyTypes.map((type) => (
          <div
            key={type}
            onClick={() => {
              if (type === "Flat") navigate("/seller/flat");
              else alert(`${type} coming soon!`);
            }}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "8px",
              cursor: "pointer",
              textAlign: "center",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            {type}
          </div>
        ))}
      </div>
      <FlatListPage/>
    </div>
  );
};

export default SellerPage;
