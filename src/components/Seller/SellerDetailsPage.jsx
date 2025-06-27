import React, { useState } from "react";
import { useParams } from "react-router-dom";
import flat1 from '../../assets/flat1.webp';
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
    purpose: "For Sale",
    completion: "Off-Plan",
    size: "1100 sqft",
    facing: "East",
    owner: { name: "Amit Kumar", contact: "9876543210" },
    highlights: ["Park Facing", "Near Metro"],
    nearby: ["Hospital", "Market", "School"],
    features: {
      furnishing: "Semi-Furnished",
      flooring: "Tiles",
      parking: "Yes",
      water: "Municipal"
    }
  },
  {
    id: 2,
    image: flat2,
    bhk: "2 BHK",
    type: "Apartment",
    size: "1100 sqft",
    facing: "East",
    owner: { name: "Rohit Verma", contact: "9876543222" },
    highlights: ["Park Facing", "Near Metro"],
    nearby: ["Hospital", "Market", "School"],
    features: {
      furnishing: "Semi-Furnished",
      flooring: "Tiles",
      parking: "Yes",
      water: "Municipal"
    }
  },
  {
    id: 3,
    image: flat3,
    bhk: "2 BHK",
    type: "Apartment",
    size: "1100 sqft",
    facing: "East",
    owner: { name: "Neha Sharma", contact: "9876543233" },
    highlights: ["Park Facing", "Near Metro"],
    nearby: ["Hospital", "Market", "School"],
    features: {
      furnishing: "Semi-Furnished",
      flooring: "Tiles",
      parking: "Yes",
      water: "Municipal"
    }
  },
  {
    id: 4,
    image: flat4,
    bhk: "2 BHK",
    type: "Apartment",
    size: "1100 sqft",
    facing: "East",
    owner: { name: "Rahul Singh", contact: "9876543244" },
    highlights: ["Park Facing", "Near Metro"],
    nearby: ["Hospital", "Market", "School"],
    features: {
      furnishing: "Semi-Furnished",
      flooring: "Tiles",
      parking: "Yes",
      water: "Municipal"
    }
  },
  {
    id: 5,
    image: flat5,
    bhk: "2 BHK",
    type: "Apartment",
    size: "1100 sqft",
    facing: "East",
    owner: { name: "Priya Das", contact: "9876543255" },
    highlights: ["Park Facing", "Near Metro"],
    nearby: ["Hospital", "Market", "School"],
    features: {
      furnishing: "Semi-Furnished",
      flooring: "Tiles",
      parking: "Yes",
      water: "Municipal"
    }
  },
];

const SellerDetailsPage = () => {
  const { id } = useParams();
  const flat = flatData.find((f) => f.id === parseInt(id));
  const [showPopup, setShowPopup] = useState(false);

  if (!flat) return <h2 style={{ padding: "2rem" }}>Seller not found</h2>;

  const handleCallClick = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  const handleWhatsappClick = () => {
    const msg = `Hi ${flat.owner.name}, I'm interested in your ${flat.bhk} flat.`;
    window.open(`https://wa.me/91${flat.owner.contact}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const [firstName, lastName] = flat.owner.name.split(" ");

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      {/* Image and Basic Info */}
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <img src={flat.image} alt="Flat" style={{ width: "45%", maxWidth: "400px", height: "300px", objectFit: "cover", borderRadius: "10px" }} />
        <div>
          <h2>{flat.bhk} - {flat.type}</h2>
          <p><strong>Owner:</strong> {flat.owner.name}</p>
          <p><strong>Contact:</strong> {flat.owner.contact}</p>
          <p><strong>Size:</strong> {flat.size}</p>
          <p><strong>Facing:</strong> {flat.facing}</p>
        </div>
      </div>

      {/* Details Section */}
      <div style={{ marginTop: "2rem", border: "1px solid #ccc", padding: "1.5rem", borderRadius: "8px", backgroundColor: "#fafafa" }}>
        <h3 style={{ marginBottom: "1rem", borderBottom: "1px solid #ddd", paddingBottom: "0.5rem" }}>Seller Property Information</h3>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
          <div><strong>Type:</strong> {flat.type}</div>
          <div><strong>Purpose:</strong> {flat.purpose}</div>
          <div><strong>Completion:</strong> {flat.completion}</div>
          <div><strong>Facing:</strong> {flat.facing}</div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
          <div style={{ flex: 1, minWidth: "220px" }}>
            <h4>Key Highlights</h4>
            <ul style={{ marginTop: "0.5rem" }}>
              {flat.highlights.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          <div style={{ flex: 1, minWidth: "220px" }}>
            <h4>Nearby</h4>
            <ul style={{ marginTop: "0.5rem" }}>
              {flat.nearby.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          <div style={{
            flex: 1,
            minWidth: "250px",
            background: "#fff",
            border: "1px solid #ccc",
            padding: "1rem",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}>
            <h4>Contact Seller</h4>
            <p><strong>Name:</strong> {firstName} <span style={{ filter: "blur(4px)" }}>{lastName || ""}</span></p>
            <p><strong>Phone:</strong> <span style={{ filter: "blur(6px)", userSelect: "none" }}>{flat.owner.contact}</span></p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "15px" }}>
              <button
                onClick={handleCallClick}
                style={{
                  padding: "12px 18px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "16px",
                  cursor: "pointer"
                }}
              >
                📞 Call
              </button>

              <button
                onClick={handleWhatsappClick}
                style={{
                  padding: "12px 18px",
                  backgroundColor: "#25d366",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "16px",
                  cursor: "pointer"
                }}
              >
                💬 WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <h4 style={{ marginTop: "2rem", borderTop: "1px solid #ddd", paddingTop: "1rem" }}>Flat Features</h4>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div><strong>Furnishing:</strong> {flat.features.furnishing}</div>
          <div><strong>Flooring:</strong> {flat.features.flooring}</div>
          <div><strong>Parking:</strong> {flat.features.parking}</div>
          <div><strong>Water:</strong> {flat.features.water}</div>
        </div>
      </div>

      {/* Subscription Popup */}
      {showPopup && (
        <div style={{
          position: "fixed",
          top: 0, left: 0,
          width: "100%", height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000
        }}>
          <div style={{
            background: "#fff",
            padding: "2rem",
            borderRadius: "10px",
            textAlign: "center",
            width: "90%",
            maxWidth: "400px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
          }}>
            <h3>🔒 Restricted Access</h3>
            <p style={{ marginBottom: "20px" }}>Only subscribed users can call the seller.</p>
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap"
            }}>
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
                  cursor: "pointer"
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
                  cursor: "pointer"
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

export default SellerDetailsPage;
