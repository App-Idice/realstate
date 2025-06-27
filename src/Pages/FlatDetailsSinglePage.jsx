// src/pages/FlatDetailsSinglePage.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import flat1 from "../assets/flat1.webp";
import flat2 from "../assets/flat2.jpg";
import flat3 from "../assets/flat3.jpg";
import flat4 from "../assets/flat4.jpg";
import flat5 from "../assets/flat5.jpg";

const flatList = [
  {
    id: 1,
    image: flat1,
    bhk: "2 BHK",
    type: "Residential",
    size: "950 sq.ft",
    budget: "₹45 Lakhs",
    facing: "South-East",
    address: "Sector 12, Noida",
    sellerName: "Rohit Verma",
    sellerContact: "9876543210",
    features: {
      furnishing: "Semi-Furnished",
      flooring: "Vitrified Tiles",
      parking: "Available",
      waterSource: "Municipal",
    },
  },
  {
    id: 2,
    image: flat2,
    bhk: "3 BHK",
    type: "Residential",
    size: "1200 sq.ft",
    budget: "₹60 Lakhs",
    facing: "South-West",
    address: "Sector 137, Noida",
    sellerName: "Anita Sharma",
    sellerContact: "9876500000",
    features: {
      furnishing: "Furnished",
      flooring: "Marble",
      parking: "Covered",
      waterSource: "Borewell",
    },
  },
  {
    id: 3,
    image: flat3,
    bhk: "1 BHK",
    type: "Studio",
    size: "600 sq.ft",
    budget: "₹30 Lakhs",
    facing: "North-East",
    address: "Indirapuram, Ghaziabad",
    sellerName: "Rajeev Mehta",
    sellerContact: "9876512345",
    features: {
      furnishing: "Unfurnished",
      flooring: "Tiles",
      parking: "Street",
      waterSource: "Municipal",
    },
  },
  {
    id: 4,
    image: flat4,
    bhk: "2 BHK",
    type: "Apartment",
    size: "1050 sq.ft",
    budget: "₹52 Lakhs",
    facing: "North-West",
    address: "Vaishali, Ghaziabad",
    sellerName: "Manoj Gupta",
    sellerContact: "9998887770",
    features: {
      furnishing: "Furnished",
      flooring: "Wooden",
      parking: "Covered",
      waterSource: "Borewell",
    },
  },
  {
    id: 5,
    image: flat5,
    bhk: "3 BHK",
    type: "Luxury",
    size: "1500 sq.ft",
    budget: "₹75 Lakhs",
    facing: "West",
    address: "Golf Course Road, Gurugram",
    sellerName: "Sunita Jain",
    sellerContact: "9887766554",
    features: {
      furnishing: "Semi-Furnished",
      flooring: "Italian Marble",
      parking: "Basement",
      waterSource: "Municipal",
    },
  },
];

const FlatDetailsSinglePage = () => {
  const { id } = useParams();
  const flat = flatList.find((f) => f.id === parseInt(id));
  const [showPopup, setShowPopup] = useState(false);

  if (!flat) return <h2 style={{ textAlign: "center" }}>Flat Not Found</h2>;

  const handleCallClick = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  const handleWhatsapp = () => {
    const message = `Hi ${flat.sellerName}, I'm interested in your ${flat.bhk} flat listed on the platform.`;
    window.open(
      `https://wa.me/91${flat.sellerContact}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  const firstName = flat.sellerName.split(" ")[0];
  const lastName = flat.sellerName.split(" ")[1] || "*****";

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Flat Full Details
      </h2>

      {/* Image + Details Layout */}
      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
        <img
          src={flat.image}
          alt="flat"
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        />

        <div style={{ flex: 1, minWidth: "300px" }}>
          <h3>Flat Details</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
            <p style={{ width: "45%" }}>
              <strong>BHK:</strong> {flat.bhk}
            </p>
            <p style={{ width: "45%" }}>
              <strong>Type:</strong> {flat.type}
            </p>
            <p style={{ width: "45%" }}>
              <strong>Size:</strong> {flat.size}
            </p>
            <p style={{ width: "45%" }}>
              <strong>Facing:</strong> {flat.facing}
            </p>
            <p style={{ width: "45%" }}>
              <strong>Budget:</strong> {flat.budget}
            </p>
            <p style={{ width: "45%" }}>
              <strong>Address:</strong> {flat.address}
            </p>
            <p style={{ width: "45%" }}>
              <strong>Seller:</strong> {flat.sellerName}
            </p>
          </div>
        </div>
      </div>

      {/* Key Highlights + Nearby + Contact */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#f9f9f9",
          marginTop: "30px",
          padding: "20px",
          borderRadius: "10px",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* Highlights */}
        <div style={{ flex: 1 }}>
          <h3>Key Highlights</h3>
          <ul>
            <li>Spacious layout</li>
            <li>Natural light & ventilation</li>
            <li>Prime location</li>
            <li>Good resale value</li>
          </ul>
        </div>

        {/* Nearby */}
        <div style={{ flex: 1 }}>
          <h3>Nearby</h3>
          <ul>
            <li>Hospitals</li>
            <li>Institutes</li>
            <li>Schools</li>
            <li>Markets</li>
          </ul>
        </div>

        {/* Contact Seller Card */}
        <div
  style={{
    flex: 1,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    minWidth: "260px",
  }}
>
          <h3>Contact Seller</h3>

           <p>
    <strong>Name:</strong> {firstName}{" "}
    <span style={{
      filter: "blur(4px)",
      display: "inline-block",
      marginLeft: "6px"
    }}>
      {lastName}
    </span>
  </p>

         <p>
    <strong>Phone:</strong>{" "}
    <span style={{
      filter: "blur(4px)",
      display: "inline-block",
      userSelect: "none"
    }}>
      {flat.sellerContact}
    </span>
  </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginTop: "15px",
            }}
          >
            <button
              onClick={handleCallClick}
              style={{
                padding: "10px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              📞 Call
            </button>
            <button
              onClick={handleWhatsapp}
              style={{
                padding: "10px",
                backgroundColor: "#25d366",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              💬 WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div
        style={{
          marginTop: "30px",
          backgroundColor: "#eef3f9",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h3>Features</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          <p>
            <strong>Furnishing:</strong> {flat.features.furnishing}
          </p>
          <p>
            <strong>Flooring:</strong> {flat.features.flooring}
          </p>
          <p>
            <strong>Parking:</strong> {flat.features.parking}
          </p>
          <p>
            <strong>Water Source:</strong> {flat.features.waterSource}
          </p>
        </div>
      </div>

      {/* Modal Popup */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "10px",
              width: "90%",
              maxWidth: "400px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              textAlign: "center",
            }}
          >
            <h3>🔒 Restricted Access</h3>
            <p>This feature is only available for subscribed users.</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                marginTop: "20px",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() => {
                  alert("Redirecting to subscription...");
                  handleClosePopup();
                }}
                style={{
                  flex: 1,
                  minWidth: "120px",
                  padding: "12px 16px",
                  fontSize: "16px",
                  backgroundColor: "#28a745",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Subscribe
              </button>
              <button
                onClick={handleClosePopup}
                style={{
                  flex: 1,
                  minWidth: "120px",
                  padding: "12px 16px",
                  fontSize: "16px",
                  backgroundColor: "#6c757d",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlatDetailsSinglePage;
